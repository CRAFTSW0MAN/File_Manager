import path from "node:path";
import fs from "node:fs";
import { homeDir } from "../../helpers/homeDir.js";
import { correct_Name_File } from "../../helpers/correct_Name_File.js";

export async function add(dirname, params) {
  const newFileName = params[0];
  if (correct_Name_File(newFileName) && newFileName) {
    const filePath = path.join(dirname, newFileName);
    const createStream = fs.createWriteStream(filePath, { flags: "wx" });
    createStream.on("close", () => homeDir());
    createStream.on("error", (err) => {
      console.error("Operation failed");
    });
    createStream.close();
  } else {
    console.error("Invalid input");
    homeDir();
  }
}
