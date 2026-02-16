import type { IndexData, StoryEntry } from "../types/index.js";
import { normalizeTitle } from "../utils/string-utils.ts";
import type { EntryFormatter } from "./entry-formatter.ts";

export class EntryProcessor {
  constructor(private formatter: EntryFormatter) {}

  sortEntries(entries: StoryEntry[]): StoryEntry[] {
    return [...entries].sort((a, b) => {
      const titleA = this.formatter.formatLabel(a).toLowerCase();
      const titleB = this.formatter.formatLabel(b).toLowerCase();
      return titleA.localeCompare(titleB, "en");
    });
  }

  groupBySection(entries: StoryEntry[]): Map<string, StoryEntry[]> {
    const grouped = new Map<string, StoryEntry[]>();
    for (const entry of this.sortEntries(entries)) {
      const section = this.formatter.getSectionFromTitle(
        this.formatter.formatLabel(entry),
      );
      if (!grouped.has(section)) {
        grouped.set(section, []);
      }
      grouped.get(section)!.push(entry);
    }
    return grouped;
  }

  buildDocsLookup(docs: StoryEntry[]): Map<string, StoryEntry[]> {
    const lookup = new Map<string, StoryEntry[]>();
    for (const entry of docs) {
      const key = normalizeTitle(entry.title) || "Untitled";
      if (!lookup.has(key)) {
        lookup.set(key, []);
      }
      lookup.get(key)!.push(entry);
    }
    return lookup;
  }

  extractFromIndexData(data: IndexData): {
    docs: StoryEntry[];
    stories: StoryEntry[];
  } {
    if (data?.entries && typeof data.entries === "object") {
      const entries = Object.values(data.entries);
      const docs = entries.filter((entry) => entry.type === "docs");
      const stories = entries.filter((entry) => entry.type === "story");
      return { docs, stories };
    }

    if (data?.stories && typeof data.stories === "object") {
      const stories = Object.values(data.stories).map((entry) => ({
        ...entry,
        type: "story" as const,
      }));
      return { docs: [], stories };
    }

    return { docs: [], stories: [] };
  }
}
