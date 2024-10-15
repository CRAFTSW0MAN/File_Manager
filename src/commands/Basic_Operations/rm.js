import path from "node:path";
import fsPromises from "node:fs/promises";
import { homeDir } from "../../helpers/homeDir.js";

export async function rm(dirname, params) {
  const fileToDelete = path.resolve(dirname, params[0]);
  await fsPromises
    .rm(fileToDelete, {
      force: false,
      recursive: true,
    })
    .then(() => {
      homeDir();
    })
    .catch((err) => {
      console.error("Operation failed");
      homeDir();
    });
}
