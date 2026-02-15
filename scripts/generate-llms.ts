import { ComponentDescriptionExtractor } from "./lib/domain/ComponentDescriptionExtractor";
import { EntryFormatter } from "./lib/domain/EntryFormatter";
import { EntryProcessor } from "./lib/domain/EntryProcessor";
import { ProjectMetadataLoader } from "./lib/domain/ProjectMetadataLoader";
import { LlmsTxtGenerator } from "./lib/generator/LlmsTxtGenerator";

const main = async (): Promise<void> => {
  try {
    const descriptionExtractor = new ComponentDescriptionExtractor();
    const formatter = new EntryFormatter(descriptionExtractor);
    const processor = new EntryProcessor(formatter);
    const metadataLoader = new ProjectMetadataLoader();
    const generator = new LlmsTxtGenerator(
      formatter,
      processor,
      metadataLoader,
    );

    await generator.generate();
  } catch (error) {
    console.error("❌ Failed to generate llms.txt.");
    console.error("Run `yarn storybook:build` first.");
    console.error(error);
    process.exit(1);
  }
};

main().catch((error) => {
  console.error("❌ Unhandled error:", error);
  process.exit(1);
});
