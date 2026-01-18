import { access, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));
const outputDir = path.join(projectRoot, "storybook-static");
const indexPath = path.join(outputDir, "index.json");
const storiesPath = path.join(outputDir, "stories.json");
const outputPath = path.join(outputDir, "llms.txt");

const tryReadJson = async (filePath) => {
  await access(filePath);
  const raw = await readFile(filePath, "utf8");
  return JSON.parse(raw);
};

const loadIndex = async () => {
  try {
    return { source: "index.json", data: await tryReadJson(indexPath) };
  } catch {
    return { source: "stories.json", data: await tryReadJson(storiesPath) };
  }
};

const formatTitle = (entry) => {
  const title = entry.title || "Untitled";
  const name = entry.name && entry.name !== "default" ? entry.name : "";
  return name ? `${title} - ${name}` : title;
};

const toUrl = (entry, type) => {
  const prefix = type === "docs" ? "docs" : "story";
  return `./?path=/${prefix}/${entry.id}`;
};

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

const main = async () => {
  try {
    const { source, data } = await loadIndex();
    const { docs, stories } = buildLists(data);
    const lines = [];

    lines.push("# React Design System Storybook");
    lines.push("");
    lines.push("> Machine-readable index of Storybook docs and stories.");
    lines.push("");
    lines.push(
      "Generated from Storybook static build data to help LLMs navigate story and docs pages.",
    );
    lines.push("");
    lines.push("## Index");
    lines.push(`- [${source}](./${source})`);

    if (docs.length > 0) {
      lines.push("");
      lines.push("## Docs");
      for (const entry of docs) {
        const title = formatTitle(entry);
        lines.push(`- [${title}](${toUrl(entry, "docs")})`);
      }
    }

    if (stories.length > 0) {
      lines.push("");
      lines.push("## Stories");
      for (const entry of stories) {
        const title = formatTitle(entry);
        lines.push(`- [${title}](${toUrl(entry, "story")})`);
      }
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
