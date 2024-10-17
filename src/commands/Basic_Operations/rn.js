import path from "node:path";
import fsPromises from "node:fs/promises";
import { homeDir } from "../../helpers/homeDir.js";
import { correct_Name_File } from "./.././../helpers/correct_Name_File.js";

export async function rn(dirname, params) {
  const [oldPath, newPath] = params;
  if (
    oldPath &&
    newPath &&
    correct_Name_File(oldPath) &&
    correct_Name_File(newPath)
  ) {
    const filePath = path.join(dirname, oldPath);
    const renameFilePath = path.join(dirname, newPath);
    await fsPromises
      .rename(filePath, renameFilePath)
      .then(() => homeDir())
      .catch((err) => {
        console.error("Operation failed");
        homeDir();
      });
  } else {
    console.error("Invalid input");
    homeDir();
  }
}
