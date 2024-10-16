import fs from "node:fs";
import path from "node:path";
import { homeDir } from "../../helpers/homeDir.js";

export function cd(params) {
  let resolvedPath= params[0];
  try {
    if(!path.isAbsolute(params[0])){
      resolvedPath = path.resolve(process.cwd(), params[0]);
    }

    if (
      fs.existsSync(resolvedPath) &&
      fs.statSync(resolvedPath).isDirectory()
    ) {
      process.chdir(resolvedPath);
      homeDir();
    } else {
      console.error("Operation failed");
      homeDir();
    }
  } catch (error) {
    console.error("Operation failed");
    homeDir();
  }
}
