import path from "node:path";
import fsPromises from "node:fs/promises";
import { homeDir } from "../../helpers/homeDir.js";
import { cp } from "./cp.js";
import { rm } from "./rm.js";
import { correct_Name_File } from "../../helpers/correct_Name_File.js";

export async function mv(dirname, params) {
  const [oldPath, newPath] = params;
  if (
    oldPath &&
    newPath &&
    correct_Name_File(oldPath) &&
    correct_Name_File(newPath)
  ) {
    try {
      await cp(dirname, params);
      await rm(dirname, params);
    } catch {}
  } else {
    console.error("Invalid input");
    homeDir();
    return;
  }
}
