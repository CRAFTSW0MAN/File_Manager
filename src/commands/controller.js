import { add } from "./Basic_Operations/add.js";
import { cat } from "./Basic_Operations/cat.js";
import { rm } from "./Basic_Operations/rm.js";
import { rn } from "./Basic_Operations/rn.js";
import { mv } from "./Basic_Operations/mv.js";
import { cp } from "./Basic_Operations/cp.js";
import {hash} from './Hash_Calculation/hash.js'

import { homeDir } from "./../helpers/homeDir.js";

export const executeCommand = async (command, dirname) => {
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
      await rm(dirname, params);
      break;
    }
    case "rn": {
      await rn(dirname, params);
      break;
    }
    case "cp": {
      await cp(dirname, params)
        .then(() => homeDir())
        .catch((err) => {
          console.error("Operation failed");
          homeDir();
        });
      break;
    }
    case "mv": {
      await mv(dirname, params);
      break;
    }
    case "hash": {
      hash(dirname, params);
      break;
    }
    default:
      console.error(`Invalid input`);
      homeDir();
  }
};
