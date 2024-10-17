import fsPromises from "node:fs/promises";
import path from "node:path";
import { homeDir } from "../../helpers/homeDir.js";

export async function cd(params) {
  let resolvedPath = params[0];
  try {
    if (!path.isAbsolute(params[0])) {
      resolvedPath = path.resolve(process.cwd(), params[0]);
    }
    const stat = await fsPromises.stat(resolvedPath);

    if (fsPromises.access(resolvedPath) && stat.isDirectory()) {
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
