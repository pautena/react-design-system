import { ComponentDescriptionExtractor } from "./lib/domain/component-description-extractor";
import { EntryFormatter } from "./lib/domain/entry-formatter";
import { EntryProcessor } from "./lib/domain/entry-processor";
import { ProjectMetadataLoader } from "./lib/domain/project-metadata-loader";
import { LlmsTxtGenerator } from "./lib/generator/llms-txt-generator";

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
      descriptionExtractor,
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
