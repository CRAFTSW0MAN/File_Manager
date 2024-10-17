import path from "node:path";
import { homeDir } from "../../helpers/homeDir.js";

export const up = () => {
  const currentDirectory = process.cwd();
    const parentDirectory = path.dirname(currentDirectory);
    if (currentDirectory === parentDirectory) {
        console.log('You are in the root directory, transition is not possible.');
        homeDir();
        return;
    }
    process.chdir(parentDirectory);
    homeDir();
};