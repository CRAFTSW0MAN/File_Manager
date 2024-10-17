import path from "node:path";
import stream from "node:stream";
import fs from "node:fs";
import fsPromises from "node:fs/promises";
import { createBrotliCompress } from "zlib";
import { correct_Name_File } from "../../helpers/correct_Name_File.js";
import { homeDir } from "../../helpers/homeDir.js";

export async function compress(dirname, params) {
  const [oldPath, newPath] = params;
  if (
    oldPath &&
    newPath &&
    correct_Name_File(oldPath) &&
    correct_Name_File(newPath)
  ) {
    const filePath = path.join(dirname, oldPath);
    const destinationFilePath = path.join(dirname, newPath);
    try {
      await fsPromises.access(filePath);
      const gBrotli = createBrotliCompress();
      const readStream = fs.createReadStream(filePath);
      const writeStream = fs.createWriteStream(destinationFilePath, {
        flags: "wx",
      });

      writeStream.on("close", () => homeDir());

      gBrotli.on("error", (err) => console.error("Operation failed"));
      readStream.on("error", (err) => console.error("Operation failed"));
      writeStream.on("error", (err) => console.error("Operation failed"));

      readStream.pipe(gBrotli).pipe(writeStream);
    } catch (error) {
      console.error("Operation failed");
      homeDir();
    }
  } else {
    console.error("Invalid input");
    homeDir();
  }
}
