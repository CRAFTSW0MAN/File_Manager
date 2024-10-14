import path from "node:path";
import fs from "node:fs";
import url from "node:url";

export const executeCommand = (command) => {
  const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
  const [cmd, ...params] = command.split(" ");
  switch (cmd) {
    case "cat":
      break;

    default:
      console.error(`Invalid input: ${command}`);
  }
};
