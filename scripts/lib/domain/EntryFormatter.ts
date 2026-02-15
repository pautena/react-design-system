import type { StoryEntry } from "../types/index.js";
import { StringUtils } from "../utils/StringUtils.js";
import type { ComponentDescriptionExtractor } from "./ComponentDescriptionExtractor.js";

export class EntryFormatter {
  constructor(private descriptionExtractor: ComponentDescriptionExtractor) {}

  formatLabel(entry: StoryEntry): string {
    const title = StringUtils.normalizeTitle(entry.title) || "Untitled";
    const name = StringUtils.normalizeTitle(entry.name);
    const trimmedName = name && name !== "default" ? name : "";
    return trimmedName ? `${title} - ${trimmedName}` : title;
  }

  getSectionFromTitle(title: string): string {
    if (!title) return "Other";
    const [section] = title.split("/");
    return section?.trim() || "Other";
  }

  toUrl(entry: StoryEntry, type: "docs" | "story"): string {
    const prefix = type === "docs" ? "docs" : "story";
    return `./?path=/${prefix}/${entry.id}`;
  }

  async formatDocsEntry(entry: StoryEntry): Promise<string> {
    const title = this.formatLabel(entry);
    const url = this.toUrl(entry, "docs");
    const description = await this.descriptionExtractor.extract(entry);

    // Format: - [Link title](url): Optional link details
    return description
      ? `- [${title}](${url}): ${description}`
      : `- [${title}](${url})`;
  }

  async formatStoryEntry(
    entry: StoryEntry,
    docsLookup: Map<string, StoryEntry[]>,
  ): Promise<string> {
    const docKey = StringUtils.normalizeTitle(entry.title) || "Untitled";
    const docLink = docsLookup.get(docKey)?.[0];
    const description = await this.descriptionExtractor.extract(entry);
    const title = this.formatLabel(entry);
    const url = this.toUrl(entry, "story");

    // Build description with docs link if available
    let fullDescription = description || "";
    if (docLink) {
      const docsUrl = this.toUrl(docLink, "docs");
      const docsSuffix = fullDescription
        ? `. [Documentation](${docsUrl})`
        : `[Documentation](${docsUrl})`;
      fullDescription = fullDescription
        ? `${fullDescription}${docsSuffix}`
        : docsSuffix;
    }

    return fullDescription
      ? `- [${title}](${url}): ${fullDescription}`
      : `- [${title}](${url})`;
  }
}
