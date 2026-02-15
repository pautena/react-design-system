import { access, readFile } from "node:fs/promises";

export class FileSystemUtils {
  static async readJson<T = unknown>(filePath: string): Promise<T> {
    await access(filePath);
    const raw = await readFile(filePath, "utf8");
    return JSON.parse(raw) as T;
  }

  static async tryReadJson<T = unknown>(filePath: string): Promise<T | null> {
    try {
      return await FileSystemUtils.readJson<T>(filePath);
    } catch {
      return null;
    }
  }

  static async fileExists(filePath: string): Promise<boolean> {
    try {
      await access(filePath);
      return true;
    } catch {
      return false;
    }
  }
}
