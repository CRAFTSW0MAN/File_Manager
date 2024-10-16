import path from "node:path";
import fsPromises from "node:fs/promises";
import { homeDir } from "../../helpers/homeDir.js";
import { correct_Name_File } from "../../helpers/correct_Name_File.js";

export async function cp(dirname, params) {
  const [oldPath, newPath] = params;
  if (
    oldPath &&
    newPath &&
    correct_Name_File(oldPath) &&
    correct_Name_File(newPath)
  ) {
    const filePath = path.join(dirname, oldPath);
    const renameFilePath = path.join(dirname, newPath);
    await fsPromises.cp(filePath, renameFilePath, {
      errorOnExist: true,
      recursive: true,
      force: false,
    });
  } else {
    console.error("Invalid input");
  }
}
