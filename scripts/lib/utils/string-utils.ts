import { TITLE_FIXES } from "../constants/index.js";

export function applyTitleFixes(value: string | undefined): string | undefined {
  if (!value) return value;

  let fixed = value;
  for (const [from, to] of TITLE_FIXES.entries()) {
    fixed = fixed.split(from).join(to);
  }
  return fixed;
}

export function normalizeTitle(value: string | undefined): string {
  return applyTitleFixes(value?.trim()) || "";
}

export function toKebabCase(value: string): string {
  return value
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/\s+/g, "-")
    .replace(/[^a-zA-Z0-9-]/g, "")
    .toLowerCase();
}
