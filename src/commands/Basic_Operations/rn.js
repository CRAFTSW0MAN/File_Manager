import path from "node:path";
import fsPromises from "node:fs/promises";
import { homeDir } from "../../helpers/homeDir.js";

export async function rn(dirname, params) {
  const [oldPath, newPath] = params;
  const filePath = path.join(dirname, oldPath);
  const renameFilePath = path.join(dirname, newPath);
  await fsPromises
    .rename(filePath, renameFilePath)
    .then(() => homeDir())
    .catch((err) => {
      console.error("Operation failed");
      homeDir();
    });
}
