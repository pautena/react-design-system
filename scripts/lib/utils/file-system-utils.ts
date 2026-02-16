import { access, readFile } from "node:fs/promises";

export async function readJson<T = unknown>(filePath: string): Promise<T> {
  await access(filePath);
  const raw = await readFile(filePath, "utf8");
  return JSON.parse(raw) as T;
}

export async function tryReadJson<T = unknown>(
  filePath: string,
): Promise<T | null> {
  try {
    return await readJson<T>(filePath);
  } catch {
    return null;
  }
}

export async function fileExists(filePath: string): Promise<boolean> {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}
