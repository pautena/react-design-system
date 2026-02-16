import { writeFile } from "node:fs/promises";
import { OUTPUT_PATH } from "../constants/index.js";
import type { ComponentDescriptionExtractor } from "../domain/component-description-extractor.js";
import { ComponentPropsExtractor } from "../domain/component-props-extractor.js";
import type { EntryFormatter } from "../domain/entry-formatter.js";
import type { EntryProcessor } from "../domain/entry-processor.js";
import type { ProjectMetadataLoader } from "../domain/project-metadata-loader.js";
import type { ProjectMetadata, StoryEntry } from "../types/index.js";

export class LlmsTxtGenerator {
  private propsExtractor: ComponentPropsExtractor;

  constructor(
    private formatter: EntryFormatter,
    private processor: EntryProcessor,
    private metadataLoader: ProjectMetadataLoader,
    private descriptionExtractor: ComponentDescriptionExtractor,
  ) {
    this.propsExtractor = new ComponentPropsExtractor(descriptionExtractor);
  }

  private generateHeader(metadata: ProjectMetadata): string[] {
    const lines: string[] = [];

    lines.push(`# ${metadata.name}`);
    lines.push("");
    lines.push(metadata.description);
    lines.push("");

    return lines;
  }

  private async generateGroupedDocsSection(
    docs: StoryEntry[],
    docsLookup: Map<string, StoryEntry[]>,
  ): Promise<string[]> {
    const lines: string[] = [];

    // Filter out category overview docs (entries where title ends with " - Docs")
    const componentDocs = docs.filter((entry) => {
      const title = this.formatter.formatLabel(entry);
      const parts = title.split("/");
      // Keep only entries with multiple parts (e.g., "Inputs/Autocomplete")
      return parts.length > 1;
    });

    // Group by category
    const categoryMap = new Map<string, StoryEntry[]>();

    for (const entry of componentDocs) {
      const title = this.formatter.formatLabel(entry);
      const category = this.getCategoryFromTitle(title);

      if (!categoryMap.has(category)) {
        categoryMap.set(category, []);
      }
      categoryMap.get(category)!.push(entry);
    }

    // Generate sections for each category
    for (const [category, entries] of categoryMap.entries()) {
      lines.push(`## ${category}`);
      lines.push("");

      // Group by component within category
      const componentMap = new Map<string, StoryEntry>();
      for (const entry of entries) {
        const title = this.formatter.formatLabel(entry);
        const component = this.getComponentNameFromTitle(title);
        // Remove " - Docs" suffix if present
        const cleanComponent = component.replace(/ - Docs$/, "");
        componentMap.set(cleanComponent, entry);
      }

      // Generate component subsections
      for (const [component, entry] of componentMap.entries()) {
        lines.push(`### ${component}`);
        lines.push("");

        // Description
        const description = await this.descriptionExtractor.extract(entry);
        if (description) {
          lines.push(description);
          lines.push("");
        }

        // Props
        try {
          const props = await this.propsExtractor.extractProps(entry);
          const propsLines = this.propsExtractor.formatProps(props);
          if (propsLines.length > 0) {
            lines.push(...propsLines);
            lines.push("");
          }
        } catch (error) {
          console.error(`Error extracting props for ${component}:`, error);
        }

        // Stories
        const storiesForComponent = docsLookup.get(component) || [];
        if (storiesForComponent.length > 0) {
          lines.push("**Stories:**");
          for (const story of storiesForComponent) {
            const storyName = story.name || "Default";
            const url = this.formatter.toUrl(story, "story");
            lines.push(`- [${storyName}](${url})`);
          }
          lines.push("");
        }

        // Docs link
        const docsUrl = this.formatter.toUrl(entry, "docs");
        lines.push(`[View Documentation](${docsUrl})`);
        lines.push("");
      }
    }

    return lines;
  }

  private getCategoryFromTitle(title: string): string {
    // Split title by "/" and use the first part as category
    const parts = title.split("/");
    return parts.length > 0 ? parts[0].trim() : "Other";
  }

  private getComponentNameFromTitle(title: string): string {
    // Get the last part of title after splitting by "/"
    const parts = title.split("/");
    return parts.length > 0 ? parts[parts.length - 1].trim() : title;
  }

  async generate(): Promise<void> {
    const [metadata, { data }] = await Promise.all([
      this.metadataLoader.load(),
      this.metadataLoader.loadIndexData(),
    ]);

    const { docs, stories } = this.processor.extractFromIndexData(data);

    // Build lookup with stories mapped to components
    const storiesLookup = new Map<string, StoryEntry[]>();
    for (const story of stories) {
      const title = this.formatter.formatLabel(story);
      const component = this.getComponentNameFromTitle(title);
      // Remove story name suffix (e.g., "Label - Default" => "Label")
      const cleanComponent = component.split(" - ")[0];
      if (!storiesLookup.has(cleanComponent)) {
        storiesLookup.set(cleanComponent, []);
      }
      storiesLookup.get(cleanComponent)!.push(story);
    }

    const lines: string[] = [];

    // Build the file content
    lines.push(...this.generateHeader(metadata));
    lines.push(...(await this.generateGroupedDocsSection(docs, storiesLookup)));

    // Write the file
    await writeFile(OUTPUT_PATH, `${lines.join("\n")}\n`, "utf8");
    console.log(`✅ llms.txt generated at ${OUTPUT_PATH}`);
  }
}
