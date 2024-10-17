import fsPromises from "node:fs/promises";
import { homeDir } from "../../helpers/homeDir.js";
export async function ls() {
  const files = await fsPromises.readdir(process.cwd(), {
    withFileTypes: true,
  });
  const entries = files.map((file) => ({
    Name: file.name,
    Type: file.isDirectory() ? "Directory" : "File",
  }));
  const sortedEntries = entries.sort((a, b) => {
    const typeComparison = a.Type.localeCompare(b.Type);
    if (typeComparison === 0) {
      return a.Name.localeCompare(b.Name);
    }
    return typeComparison;
  });
  console.table(sortedEntries);
  homeDir();
}
