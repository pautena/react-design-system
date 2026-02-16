import { readFile } from "node:fs/promises";
import type { StoryEntry } from "../types/index.js";
import type { ComponentDescriptionExtractor } from "./component-description-extractor.js";

export interface PropInfo {
  name: string;
  type?: string;
  description?: string;
  required: boolean;
}

export class ComponentPropsExtractor {
  constructor(private descriptionExtractor: ComponentDescriptionExtractor) {}

  private extractPropsFromJsDoc(content: string): PropInfo[] {
    const props: PropInfo[] = [];

    // Match the interface with Props suffix
    const interfaceMatch = content.match(
      /export\s+interface\s+\w+Props\s*\{([^}]*(?:\{[^}]*\}[^}]*)*)\}/s,
    );

    if (!interfaceMatch) return props;

    const propsBlock = interfaceMatch[1];

    // Match each prop with its JSDoc comment
    const propPattern =
      /\/\*\*\s*\n\s*\*\s*([^\n]+)\s*\n\s*\*\/\s*\n\s*(\w+)(\?)?:\s*([^;]+);/g;

    for (const match of propsBlock.matchAll(propPattern)) {
      const [, description, name, optional, type] = match;
      props.push({
        name,
        type: type?.trim(),
        description: description?.trim(),
        required: !optional,
      });
    }

    return props;
  }

  async extractProps(entry: StoryEntry): Promise<PropInfo[]> {
    const componentName = this.descriptionExtractor.getComponentName(entry);
    if (!componentName) return [];

    const componentPath =
      await this.descriptionExtractor.findComponentFile(componentName);
    if (!componentPath) return [];

    try {
      const content = await readFile(componentPath, "utf8");
      return this.extractPropsFromJsDoc(content);
    } catch {
      return [];
    }
  }

  formatProps(props: PropInfo[]): string[] {
    if (props.length === 0) return [];

    const lines: string[] = ["**Props:**"];
    for (const prop of props) {
      const required = prop.required ? " (required)" : "";
      const type = prop.type ? `: \`${prop.type}\`` : "";
      const desc = prop.description ? ` - ${prop.description}` : "";
      lines.push(`- \`${prop.name}\`${type}${required}${desc}`);
    }
    return lines;
  }
}
