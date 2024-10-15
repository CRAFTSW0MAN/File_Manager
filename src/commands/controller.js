import { add } from "./Basic_Operations/add.js";
import { cat } from "./Basic_Operations/cat.js";
import { rm } from "./Basic_Operations/rm.js";

import { homeDir } from "./../helpers/homeDir.js";

export const executeCommand = (command, dirname) => {
  const [cmd, ...params] = command.split(" ");
  switch (cmd) {
    case "cat": {
      cat(dirname, params);
      break;
    }
    case "add": {
      add(dirname, params);
      break;
    }
    case "rm": {
      rm(dirname, params);
      break;
    }
    default:
      console.error(`Invalid input`);
      homeDir();
  }
};
