import { writeFile } from "node:fs/promises";
import { OUTPUT_PATH } from "../constants/index.js";
import type { EntryFormatter } from "../domain/EntryFormatter.js";
import type { EntryProcessor } from "../domain/EntryProcessor.js";
import type { ProjectMetadataLoader } from "../domain/ProjectMetadataLoader.js";
import type { ProjectMetadata, StoryEntry } from "../types/index.js";

export class LlmsTxtGenerator {
  constructor(
    private formatter: EntryFormatter,
    private processor: EntryProcessor,
    private metadataLoader: ProjectMetadataLoader,
  ) {}

  private generateHeader(metadata: ProjectMetadata): string[] {
    const lines: string[] = [];

    // Title (required per llmstxt.org spec)
    lines.push(`# ${metadata.name}`);
    lines.push("");

    // Blockquote summary (recommended per llmstxt.org spec)
    lines.push(`> ${metadata.description}`);
    lines.push("");

    return lines;
  }

  private generateMetadata(
    metadata: ProjectMetadata,
    source: string,
  ): string[] {
    const lines: string[] = [];

    // Additional context (zero or more markdown sections before H2 headers)
    lines.push(`**Version:** ${metadata.version}`);
    lines.push(`**Built:** ${metadata.buildTime}`);
    lines.push(`**Storybook:** ${metadata.storybookVersion}`);
    lines.push(`**Base URL:** ${metadata.baseUrl}`);
    lines.push("");
    lines.push(
      "This file provides links to component documentation and interactive stories following the [llmstxt.org](https://llmstxt.org/) specification.",
    );
    lines.push("");
    lines.push("**Navigation:**");
    lines.push("- Docs pages use `?path=/docs/{component-id}`");
    lines.push("- Interactive stories use `?path=/story/{component-id}`");
    lines.push(`- Raw metadata: [${source}](./${source})`);
    lines.push("");

    return lines;
  }

  private async generateDocsSection(
    docs: StoryEntry[],
    docsLookup: Map<string, StoryEntry[]>,
  ): Promise<string[]> {
    const lines: string[] = [];
    const grouped = this.processor.groupBySection(docs);

    for (const [section, entries] of grouped.entries()) {
      // H2 section headers per llmstxt.org spec
      lines.push(`## ${section}`);
      lines.push("");

      for (const entry of entries) {
        const line = await this.formatter.formatDocsEntry(entry);
        lines.push(line);
      }

      lines.push("");
    }

    return lines;
  }

  private async generateStoriesSection(
    stories: StoryEntry[],
    docsLookup: Map<string, StoryEntry[]>,
  ): Promise<string[]> {
    const lines: string[] = [];

    // Add "Optional" section for stories (can be skipped for shorter context)
    lines.push("## Optional");
    lines.push("");
    lines.push(
      "The following are interactive story variations. These can be skipped if you only need component documentation.",
    );
    lines.push("");

    const grouped = this.processor.groupBySection(stories);
    for (const [section, entries] of grouped.entries()) {
      lines.push(`### ${section}`);
      lines.push("");

      for (const entry of entries) {
        const line = await this.formatter.formatStoryEntry(entry, docsLookup);
        lines.push(line);
      }

      lines.push("");
    }

    return lines;
  }

  async generate(): Promise<void> {
    const [metadata, { source, data }] = await Promise.all([
      this.metadataLoader.load(),
      this.metadataLoader.loadIndexData(),
    ]);

    const { docs, stories } = this.processor.extractFromIndexData(data);
    const docsLookup = this.processor.buildDocsLookup(docs);

    const lines: string[] = [];

    // Build the file content
    lines.push(...this.generateHeader(metadata));
    lines.push(...this.generateMetadata(metadata, source));

    if (docs.length > 0) {
      lines.push(...(await this.generateDocsSection(docs, docsLookup)));
    }

    if (stories.length > 0) {
      lines.push(...(await this.generateStoriesSection(stories, docsLookup)));
    }

    // Write the file
    await writeFile(OUTPUT_PATH, `${lines.join("\n")}\n`, "utf8");
    console.log(`✅ llms.txt generated at ${OUTPUT_PATH}`);
  }
}
