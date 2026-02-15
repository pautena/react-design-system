import { TITLE_FIXES } from "../constants/index.js";

export class StringUtils {
  static applyTitleFixes(value: string | undefined): string | undefined {
    if (!value) return value;

    let fixed = value;
    for (const [from, to] of TITLE_FIXES.entries()) {
      fixed = fixed.split(from).join(to);
    }
    return fixed;
  }

  static normalizeTitle(value: string | undefined): string {
    return StringUtils.applyTitleFixes(value?.trim()) || "";
  }

  static toKebabCase(value: string): string {
    return value
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .replace(/\s+/g, "-")
      .replace(/[^a-zA-Z0-9-]/g, "")
      .toLowerCase();
  }
}
