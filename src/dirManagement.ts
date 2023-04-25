import { existsSync, mkdirSync } from "fs";
import { promises } from "fs";
import { resolve } from "path";

const createDir = (filePath: string): void => {
  if (!existsSync(filePath)) {
    mkdirSync(filePath);
    console.log("The directory has been created successfully!");
  }
};

const listDir = async (filePath: string): Promise<void> => {
  try {
    const files = await promises.readdir(filePath);
    const detailedFilesPromises = files.map(async (file: string) => {
      const { size, birthtime } = await promises.lstat(resolve(filePath, file));

      return { filename: file, "size(KB)": size, created_at: birthtime };
    });

    const detailedFiles = await Promise.all(detailedFilesPromises);
    
    console.table(detailedFiles);
  } catch (err) {
    console.error("Error occured while reading the directory", err);
  }
};

export { createDir, listDir };
