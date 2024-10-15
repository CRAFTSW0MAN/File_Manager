import path from "node:path";
import fsPromises from "node:fs/promises";
import { homeDir } from "../../helpers/homeDir.js";

export async function cp(dirname, params) {
  const [oldPath, newPath] = params;
  const filePath = path.join(dirname, oldPath);
  const renameFilePath = path.join(dirname, newPath);
  await fsPromises
    .cp(filePath, renameFilePath, {
      errorOnExist: true,
      recursive: true,
      force: false,
    })
    .then(() => homeDir())
    .catch((err) => {
      console.error("Operation failed");
      homeDir();
    });
}
