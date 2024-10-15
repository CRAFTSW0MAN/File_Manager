import path from "node:path";
import fs from "node:fs";
import { homeDir } from "../../helpers/homeDir.js";

export function add(dirname, params) {
  const newFileName = params[0];
  const filePath = path.join(dirname, newFileName);
  const createStream = fs.createWriteStream(filePath, "utf-8");
  createStream.on("close", () => homeDir());
  createStream.on("error", (err) =>console.error("Operation failed"));
  createStream.close();
}
