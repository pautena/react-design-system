import {
  DEFAULT_VALUES,
  INDEX_PATH,
  PACKAGE_JSON_PATH,
  STORIES_PATH,
} from "../constants/index.js";
import type {
  IndexData,
  LoadIndexResult,
  PackageJson,
  ProjectMetadata,
} from "../types/index.js";
import { readJson, tryReadJson } from "../utils/file-system-utils.ts";

export class ProjectMetadataLoader {
  async loadPackageJson(): Promise<PackageJson | null> {
    return await tryReadJson<PackageJson>(PACKAGE_JSON_PATH);
  }

  async loadIndexData(): Promise<LoadIndexResult> {
    const indexData = await tryReadJson<IndexData>(INDEX_PATH);
    if (indexData) {
      return { source: "index.json", data: indexData };
    }

    const storiesData = await readJson<IndexData>(STORIES_PATH);
    return { source: "stories.json", data: storiesData };
  }

  getBaseUrl(packageJson: PackageJson | null): string {
    const homepage = packageJson?.homepage?.replace(/\/$/, "");
    return homepage || DEFAULT_VALUES.baseUrl;
  }

  getStorybookVersion(packageJson: PackageJson | null): string {
    const dev = packageJson?.devDependencies?.storybook;
    const deps = packageJson?.dependencies?.storybook;
    return dev || deps || DEFAULT_VALUES.storybookVersion;
  }

  async load(): Promise<ProjectMetadata> {
    const packageJson = await this.loadPackageJson();

    return {
      name: packageJson?.name || DEFAULT_VALUES.projectName,
      version: packageJson?.version || DEFAULT_VALUES.version,
      description: packageJson?.description || DEFAULT_VALUES.description,
      baseUrl: this.getBaseUrl(packageJson),
      buildTime: new Date().toISOString(),
      storybookVersion: this.getStorybookVersion(packageJson),
    };
  }
}
