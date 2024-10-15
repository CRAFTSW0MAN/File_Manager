import path from "node:path";
import fs from "node:fs";
import { homeDir } from "../../helpers/homeDir.js";

export function cat(dirname, params) {
  if(params[0]){
    const filePath = path.join(dirname, params[0]);
    const readStream = fs.createReadStream(filePath);
    readStream.on("data", (text) => {
      process.stdout.write(`${text}\n`);
      homeDir();
    });
    readStream.on("error", (error) => {
      console.error("Operation failed");
      homeDir();
    });
  } else {
    console.error("Invalid input");
    homeDir();
  }
}
