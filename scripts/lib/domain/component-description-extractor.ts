import { readFile } from "node:fs/promises";
import path from "node:path";
import { PROJECT_ROOT } from "../constants/index.js";
import type { StoryEntry } from "../types/index.js";
import { fileExists } from "../utils/file-system-utils.ts";
import { normalizeTitle, toKebabCase } from "../utils/string-utils.ts";

export class ComponentDescriptionExtractor {
  private descriptionCache = new Map<string, string>();
  private filePathCache = new Map<string, string | null>();

  getComponentName(entry: StoryEntry): string {
    const title = normalizeTitle(entry.title) || "";
    const segments = title.split("/");
    return segments[segments.length - 1]?.trim() || "";
  }

  async findComponentFile(componentName: string): Promise<string | null> {
    if (!componentName) return null;

    if (this.filePathCache.has(componentName)) {
      return this.filePathCache.get(componentName)!;
    }

    const kebab = toKebabCase(componentName);

    // Try PascalCase first (project uses PascalCase directories)
    const baseDirPascal = path.join(PROJECT_ROOT, "src", componentName);
    const candidatesPascal = [
      path.join(baseDirPascal, `${componentName}.tsx`),
      path.join(baseDirPascal, `${kebab}.tsx`),
      path.join(baseDirPascal, "index.tsx"),
    ];

    for (const candidate of candidatesPascal) {
      if (await fileExists(candidate)) {
        this.filePathCache.set(componentName, candidate);
        return candidate;
      }
    }

    // Fallback to kebab-case
    const baseDir = path.join(PROJECT_ROOT, "src", kebab);
    const candidates = [
      path.join(baseDir, `${kebab}.tsx`),
      path.join(baseDir, `${componentName}.tsx`),
      path.join(baseDir, "index.tsx"),
    ];

    for (const candidate of candidates) {
      if (await fileExists(candidate)) {
        this.filePathCache.set(componentName, candidate);
        return candidate;
      }
    }

    this.filePathCache.set(componentName, null);
    return null;
  }

  private stripBlockCommentMarkers(block: string): string[] {
    return block.split("\n").map((line) => line.replace(/^\s*\*\s?/, ""));
  }

  private extractComponentJsDoc(
    content: string,
    componentName: string,
  ): string {
    if (!content || !componentName) return "";

    // Find the export function/const/class line
    const exportPattern = new RegExp(
      `export\\s+(?:function|const|class)\\s+${componentName}\\b`,
    );
    const exportMatch = exportPattern.exec(content);
    if (!exportMatch) return "";

    // Look backwards from the export to find the NEAREST JSDoc block
    // Match from the end: optional whitespace, then */, then JSDoc content, then /**
    const beforeExport = content.substring(0, exportMatch.index);
    const jsdocPattern = /\/\*\*([^*](?:(?!\*\/)[\s\S])*)\*\/\s*$/;
    const jsdocMatch = beforeExport.match(jsdocPattern);

    if (!jsdocMatch) return "";

    const lines = this.stripBlockCommentMarkers(jsdocMatch[1]);

    // Process the lines to separate description from examples
    const result: string[] = [];
    let inExample = false;
    const exampleLines: string[] = [];

    for (const line of lines) {
      const trimmed = line.trim();

      if (trimmed.startsWith("@example")) {
        inExample = true;
        continue;
      }

      if (inExample) {
        exampleLines.push(line);
      } else if (trimmed) {
        result.push(trimmed);
      }
    }

    // Build final output
    let output = result.join(" ").trim();

    if (exampleLines.length > 0) {
      // Clean up example lines and format properly
      const exampleText = exampleLines.join("\n").trim();
      output += `\n\n**Example:**\n\n${exampleText}`;
    }

    return output;
  }

  private extractLastJsDocBlock(content: string): string {
    if (!content) return "";

    // Find all JSDoc blocks that are NOT before interfaces
    const matches = Array.from(content.matchAll(/\/\*\*([\s\S]*?)\*\//g));

    for (let i = matches.length - 1; i >= 0; i--) {
      const match = matches[i];
      const afterComment = content.slice(match.index! + match[0].length);

      // Skip if followed by interface/type declaration
      if (
        afterComment.trim().match(/^(export\s+)?interface|^(export\s+)?type/)
      ) {
        continue;
      }

      const lines = this.stripBlockCommentMarkers(match[1]);
      if (lines.length > 0) {
        return lines.join(" ").trim();
      }
    }

    return "";
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
