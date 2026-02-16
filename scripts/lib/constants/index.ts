import path from "node:path";
import { fileURLToPath } from "node:url";

// scripts/lib/constants/index.ts - go up 3 levels to get to project root
const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const PROJECT_ROOT = path.resolve(__dirname, "..", "..", "..");
export const OUTPUT_DIR = path.join(__dirname, "..", "..", "storybook-static");
export const INDEX_PATH = path.join(OUTPUT_DIR, "index.json");
export const STORIES_PATH = path.join(OUTPUT_DIR, "stories.json");
export const OUTPUT_PATH = path.join(OUTPUT_DIR, "llms.txt");
export const PACKAGE_JSON_PATH = path.join(PROJECT_ROOT, "package.json");

export const TITLE_FIXES = new Map([
  ["Wihtout", "Without"],
  ["Sucess", "Success"],
  ["Data display", "Data Display"],
  ["Breadcumbs", "Breadcrumbs"],
]);

export const DEFAULT_VALUES = {
  projectName: "React Design System",
  version: "unknown",
  description:
    "Custom design system built on top of MUI with React components for rapid prototyping",
  baseUrl: "./",
  storybookVersion: "unknown",
} as const;
