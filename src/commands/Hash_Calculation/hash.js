import path from "node:path";
import fs from "node:fs";
import { createHash } from "crypto";
import { homeDir } from "./../../helpers/homeDir.js";

export function hash(dirname, params) {
  if (params[0]) {
    const filePath = path.resolve(dirname, params[0]);
    const hash = createHash("sha256");
    const stream = fs.createReadStream(filePath);

    stream.on("data", (chunk) => hash.update(chunk));
    stream.on("end", () => {
      console.log(hash.digest("hex"));
      homeDir();
    });
    stream.on("error", (err) => {
      console.error("Operation failed");
      homeDir();
    });
  } else {
    console.error("Invalid input");
    homeDir();
  }
}
