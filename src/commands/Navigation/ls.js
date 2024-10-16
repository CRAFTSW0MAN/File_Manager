import fs from "node:fs";
import { homeDir } from "../../helpers/homeDir.js";
export function ls() {
  const files = fs.readdirSync(process.cwd(), { withFileTypes: true });
  const entries = files.map((file) => {
    return {
      name: file.name,
      type: file.isDirectory() ? "Directory" : "File",
    };
  });
  const sortedEntries = entries.sort((a, b) => {
    const typeComparison = a.type.localeCompare(b.type);
    if (typeComparison === 0) {
      return a.name.localeCompare(b.name);
    }
    return typeComparison;
  });
  console.table(sortedEntries);
  homeDir();
}
