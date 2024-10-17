import path from "node:path";
import fs from "node:fs";
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
    try {
      await fsPromises.access(filePath);

      const readStream = fs.createReadStream(filePath);
      const writeStream = fs.createWriteStream(renameFilePath, { flags: "wx" });
      readStream.on("close", () => homeDir());

      readStream.on("error", (err) => {
        console.error("Operation failed");
      });

      writeStream.on("error", (err) => {
        console.error("Operation failed");
      });
      readStream.pipe(writeStream);
      readStream.close();
    } catch (error) {
      console.error("Operation failed");
      homeDir();
    }
  } else {
    console.error("Invalid input");
    homeDir();
    return;
  }
}
