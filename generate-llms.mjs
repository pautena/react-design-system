import { access, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));
const outputDir = path.join(projectRoot, "storybook-static");
const indexPath = path.join(outputDir, "index.json");
const storiesPath = path.join(outputDir, "stories.json");
const outputPath = path.join(outputDir, "llms.txt");
const packageJsonPath = path.join(projectRoot, "package.json");

const tryReadJson = async (filePath) => {
  await access(filePath);
  const raw = await readFile(filePath, "utf8");
  return JSON.parse(raw);
};

const titleFixes = new Map([
  ["Wihtout", "Without"],
  ["Sucess", "Success"],
  ["Data display", "Data Display"],
  ["Breadcumbs", "Breadcrumbs"],
]);

const applyTitleFixes = (value) => {
  if (!value) {
    return value;
  }

  let fixed = value;
  for (const [from, to] of titleFixes.entries()) {
    fixed = fixed.split(from).join(to);
  }

  return fixed;
};

const normalizeTitle = (value) => applyTitleFixes(value?.trim());

const formatEntryLabel = (entry) => {
  const title = normalizeTitle(entry.title) || "Untitled";
  const name = normalizeTitle(entry.name);
  const trimmedName = name && name !== "default" ? name : "";
  return trimmedName ? `${title} - ${trimmedName}` : title;
};

const getSectionFromTitle = (title) => {
  if (!title) {
    return "Other";
  }

  const [section] = title.split("/");
  return section?.trim() || "Other";
};

const sortEntries = (entries) =>
  [...entries].sort((a, b) => {
    const titleA = formatEntryLabel(a).toLowerCase();
    const titleB = formatEntryLabel(b).toLowerCase();
    return titleA.localeCompare(titleB, "en");
  });

const groupEntries = (entries) => {
  const grouped = new Map();
  for (const entry of sortEntries(entries)) {
    const section = getSectionFromTitle(formatEntryLabel(entry));
    if (!grouped.has(section)) {
      grouped.set(section, []);
    }

    grouped.get(section).push(entry);
  }

  return grouped;
};

const formatEntryLine = (entry, type) => {
  const title = formatEntryLabel(entry);
  const tag = type === "docs" ? "docs" : "story";
  return `- [${title}](${toUrl(entry, type)}) {id:${entry.id}} [${tag}]`;
};

const formatDocLink = (entry) => `[Docs](${toUrl(entry, "docs")})`;

const formatStoryLine = (entry, docsLookup) => {
  const docKey = normalizeTitle(entry.title) || "Untitled";
  const docLink = docsLookup.get(docKey)?.[0];
  const docsSuffix = docLink ? ` ${formatDocLink(docLink)}` : "";
  return `${formatEntryLine(entry, "story")}${docsSuffix}`;
};

const componentDescriptionCache = new Map();
const componentFileCache = new Map();

const toKebabCase = (value) =>
  value
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/\s+/g, "-")
    .replace(/[^a-zA-Z0-9-]/g, "")
    .toLowerCase();

const getComponentName = (entry) => {
  const title = normalizeTitle(entry.title) || "";
  const segments = title.split("/");
  return segments[segments.length - 1]?.trim();
};

const getComponentFilePath = async (componentName) => {
  if (!componentName) {
    return null;
  }

  if (componentFileCache.has(componentName)) {
    return componentFileCache.get(componentName);
  }

  const kebab = toKebabCase(componentName);
  const baseDir = path.join(projectRoot, "src", kebab);
  const candidates = [
    path.join(baseDir, `${kebab}.tsx`),
    path.join(baseDir, `${componentName}.tsx`),
    path.join(baseDir, "index.tsx"),
  ];

  for (const candidate of candidates) {
    try {
      await access(candidate);
      componentFileCache.set(componentName, candidate);
      return candidate;
    } catch {}
  }

  componentFileCache.set(componentName, null);
  return null;
};

const stripBlockCommentMarkers = (block) =>
  block
    .split("\n")
    .map((line) => line.replace(/^\s*\*\s?/, "").trim())
    .filter(Boolean)
    .filter((line) => !line.startsWith("@"));

const extractComponentJsDoc = (content, componentName) => {
  if (!content || !componentName) {
    return "";
  }

  const pattern = new RegExp(
    `/\\*\\*([\\s\\S]*?)\\*/\\s*export\\s+(?:const|function|class)\\s+${componentName}\\b`,
  );
  const match = content.match(pattern);
  if (!match) {
    return "";
  }

  const lines = stripBlockCommentMarkers(match[1]);
  return lines.join(" ").trim();
};

const extractLastJsDocBlock = (content) => {
  if (!content) {
    return "";
  }

  const matches = content.matchAll(/\/\*\*([\s\S]*?)\*\//g);
  let last = "";
  for (const match of matches) {
    const lines = stripBlockCommentMarkers(match[1]);
    if (lines.length > 0) {
      last = lines.join(" ").trim();
    }
  }

  return last;
};

const getComponentDescription = async (entry) => {
  const componentName = getComponentName(entry);
  if (!componentName) {
    return "";
  }

  if (componentDescriptionCache.has(componentName)) {
    return componentDescriptionCache.get(componentName);
  }

  const componentPath = await getComponentFilePath(componentName);
  if (!componentPath) {
    componentDescriptionCache.set(componentName, "");
    return "";
  }

  try {
    const content = await readFile(componentPath, "utf8");
    const description =
      extractComponentJsDoc(content, componentName) ||
      extractLastJsDocBlock(content);
    componentDescriptionCache.set(componentName, description);
    return description;
  } catch {
    componentDescriptionCache.set(componentName, "");
    return "";
  }
};

const getEntryDescription = async (entry) => {
  const componentDescription = await getComponentDescription(entry);
  if (componentDescription) {
    return componentDescription;
  }

  const params = entry?.parameters || {};
  const description =
    params.docs?.description?.component ||
    params.docs?.description?.story ||
    params.docs?.description?.docs ||
    params.description ||
    entry?.description;

  if (!description) {
    return "";
  }

  return String(description).trim();
};

const formatEntryDescription = async (entry) => {
  const description = await getEntryDescription(entry);
  if (!description) {
    return null;
  }

  return `- ${description}`;
};

const getBaseUrl = async (projectMeta) => {
  const homepage = projectMeta?.homepage?.replace(/\/$/, "");
  if (homepage) {
    return homepage;
  }

  return "./";
};

const loadProjectMeta = async () => {
  try {
    return await tryReadJson(packageJsonPath);
  } catch {
    return null;
  }
};

const loadIndex = async () => {
  try {
    return { source: "index.json", data: await tryReadJson(indexPath) };
  } catch {
    return { source: "stories.json", data: await tryReadJson(storiesPath) };
  }
};

const toUrl = (entry, type) => {
  const prefix = type === "docs" ? "docs" : "story";
  return `./?path=/${prefix}/${entry.id}`;
};

const getStorybookVersion = (projectMeta) => {
  const dev = projectMeta?.devDependencies?.storybook;
  const deps = projectMeta?.dependencies?.storybook;
  return dev || deps || "unknown";
};

const getBuildTime = () => new Date().toISOString();

const buildLists = (data) => {
  if (data?.entries && typeof data.entries === "object") {
    const entries = Object.values(data.entries);
    const docs = entries.filter((entry) => entry.type === "docs");
    const stories = entries.filter((entry) => entry.type === "story");
    return { docs, stories };
  }

  if (data?.stories && typeof data.stories === "object") {
    const stories = Object.values(data.stories).map((entry) => ({
      ...entry,
      type: "story",
    }));
    return { docs: [], stories };
  }

  return { docs: [], stories: [] };
};

const buildDocsLookup = (docs) => {
  const lookup = new Map();
  for (const entry of docs) {
    const key = normalizeTitle(entry.title) || "Untitled";
    if (!lookup.has(key)) {
      lookup.set(key, []);
    }

    lookup.get(key).push(entry);
  }

  return lookup;
};

const formatGroupedEntries = async (lines, entries, type, docsLookup) => {
  const grouped = groupEntries(entries);
  for (const [section, groupedEntries] of grouped.entries()) {
    lines.push("");
    lines.push(`### ${section}`);
    for (const entry of groupedEntries) {
      lines.push("");
      lines.push(`#### ${formatEntryLabel(entry)}`);
      const description = await formatEntryDescription(entry);
      if (description) {
        lines.push(description);
      }

      if (type === "story") {
        lines.push(formatStoryLine(entry, docsLookup));
      } else {
        lines.push(formatEntryLine(entry, type));
      }
    }
  }
};

const main = async () => {
  try {
    const [projectMeta, { source, data }] = await Promise.all([
      loadProjectMeta(),
      loadIndex(),
    ]);
    const { docs, stories } = buildLists(data);
    const docsLookup = buildDocsLookup(docs);
    const lines = [];

    const projectName = projectMeta?.name || "React Design System";
    const projectVersion = projectMeta?.version || "unknown";
    const baseUrl = await getBaseUrl(projectMeta);
    const buildTime = getBuildTime();
    const storybookVersion = getStorybookVersion(projectMeta);

    lines.push("---");
    lines.push(`project: ${projectName}`);
    lines.push(`version: ${projectVersion}`);
    lines.push(`generated: ${buildTime}`);
    lines.push(`storybook: ${storybookVersion}`);
    lines.push(`base_url: ${baseUrl}`);
    lines.push(`source_index: ${source}`);
    lines.push("---");
    lines.push("");
    lines.push(`# ${projectName} Storybook`);
    lines.push("");
    lines.push("> Machine-readable index of Storybook docs and stories.");
    lines.push("");
    lines.push(
      "Generated from Storybook static build data to help LLMs navigate story and docs pages.",
    );
    lines.push("");
    lines.push("## Usage");
    lines.push("- Use ?path=/docs/... for docs pages");
    lines.push("- Use ?path=/story/... for interactive stories");
    lines.push("");
    lines.push("## Index");
    lines.push(`- [${source}](./${source})`);

    if (docs.length > 0) {
      lines.push("");
      lines.push("## Docs");
      await formatGroupedEntries(lines, docs, "docs", docsLookup);
    }

    if (stories.length > 0) {
      lines.push("");
      lines.push("## Stories");
      await formatGroupedEntries(lines, stories, "story", docsLookup);
    }

    await writeFile(outputPath, `${lines.join("\n")}\n`, "utf8");
    console.log(`llms.txt generated at ${outputPath}`);
  } catch (error) {
    console.error("Failed to generate llms.txt.");
    console.error("Run `yarn storybook:build` first.");
    console.error(error);
    process.exit(1);
  }
};

await main();
