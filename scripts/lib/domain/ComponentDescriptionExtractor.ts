import { readFile } from "node:fs/promises";
import path from "node:path";
import { PROJECT_ROOT } from "../constants/index.js";
import type { StoryEntry } from "../types/index.js";
import { FileSystemUtils } from "../utils/FileSystemUtils.js";
import { StringUtils } from "../utils/StringUtils.js";

export class ComponentDescriptionExtractor {
  private descriptionCache = new Map<string, string>();
  private filePathCache = new Map<string, string | null>();

  getComponentName(entry: StoryEntry): string {
    const title = StringUtils.normalizeTitle(entry.title) || "";
    const segments = title.split("/");
    return segments[segments.length - 1]?.trim() || "";
  }

  async findComponentFile(componentName: string): Promise<string | null> {
    if (!componentName) return null;

    if (this.filePathCache.has(componentName)) {
      return this.filePathCache.get(componentName)!;
    }

    const kebab = StringUtils.toKebabCase(componentName);
    const baseDir = path.join(PROJECT_ROOT, "src", kebab);
    const candidates = [
      path.join(baseDir, `${kebab}.tsx`),
      path.join(baseDir, `${componentName}.tsx`),
      path.join(baseDir, "index.tsx"),
    ];

    for (const candidate of candidates) {
      if (await FileSystemUtils.fileExists(candidate)) {
        this.filePathCache.set(componentName, candidate);
        return candidate;
      }
    }

    this.filePathCache.set(componentName, null);
    return null;
  }

  private stripBlockCommentMarkers(block: string): string[] {
    return block
      .split("\n")
      .map((line) => line.replace(/^\s*\*\s?/, "").trim())
      .filter(Boolean)
      .filter((line) => !line.startsWith("@"));
  }

  private extractComponentJsDoc(
    content: string,
    componentName: string,
  ): string {
    if (!content || !componentName) return "";

    const pattern = new RegExp(
      `/\\*\\*([\\s\\S]*?)\\*/\\s*export\\s+(?:const|function|class)\\s+${componentName}\\b`,
    );
    const match = content.match(pattern);
    if (!match) return "";

    const lines = this.stripBlockCommentMarkers(match[1]);
    return lines.join(" ").trim();
  }

  private extractLastJsDocBlock(content: string): string {
    if (!content) return "";

    const matches = content.matchAll(/\/\*\*([\s\S]*?)\*\//g);
    let last = "";
    for (const match of matches) {
      const lines = this.stripBlockCommentMarkers(match[1]);
      if (lines.length > 0) {
        last = lines.join(" ").trim();
      }
    }
    return last;
  }

  async extractFromFile(entry: StoryEntry): Promise<string> {
    const componentName = this.getComponentName(entry);
    if (!componentName) return "";

    if (this.descriptionCache.has(componentName)) {
      return this.descriptionCache.get(componentName)!;
    }

    const componentPath = await this.findComponentFile(componentName);
    if (!componentPath) {
      this.descriptionCache.set(componentName, "");
      return "";
    }

    try {
      const content = await readFile(componentPath, "utf8");
      const description =
        this.extractComponentJsDoc(content, componentName) ||
        this.extractLastJsDocBlock(content);
      this.descriptionCache.set(componentName, description);
      return description;
    } catch {
      this.descriptionCache.set(componentName, "");
      return "";
    }
  }

  extractFromMetadata(entry: StoryEntry): string {
    const params = entry?.parameters || {};
    const description =
      params.docs?.description?.component ||
      params.docs?.description?.story ||
      params.docs?.description?.docs ||
      params.description ||
      entry?.description;

    return description ? String(description).trim() : "";
  }

  async extract(entry: StoryEntry): Promise<string> {
    const fileDescription = await this.extractFromFile(entry);
    if (fileDescription) return fileDescription;

    return this.extractFromMetadata(entry);
  }
}
