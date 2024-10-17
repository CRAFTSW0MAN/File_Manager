import { add } from "./Basic_Operations/add.js";
import { cat } from "./Basic_Operations/cat.js";
import { rm } from "./Basic_Operations/rm.js";
import { rn } from "./Basic_Operations/rn.js";
import { mv } from "./Basic_Operations/mv.js";
import { cp } from "./Basic_Operations/cp.js";
import { hash } from "./Hash_Calculation/hash.js";
import { ls } from "./Navigation/ls.js";
import { up } from "./Navigation/up.js";
import { cd } from "./Navigation/cd.js";
import { compress } from "./Brotli/compress.js";
import { decompress } from "./Brotli/decompress.js";
import { osSystem } from "./System_Info/os.js";
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
      await rm(dirname, params).then(()=>homeDir()).catch((error)=> {
        console.error("Operation failed");
        homeDir();
      })
      break;
    }
    case "rn": {
      await rn(dirname, params);
      break;
    }
    case "cp": {
      await cp(dirname, params)
      break;
    }
    case "mv": {
      await mv(dirname, params)
      break;
    }
    case "hash": {
      hash(dirname, params);
      break;
    }
    case "ls": {
      ls();
      break;
    }
    case "up": {
      up();
      break;
    }
    case "cd": {
      cd(params);
      break;
    }
    case "os": {
      osSystem(params);
      break;
    }
    case "compress": {
      compress(dirname, params);
      break;
    }
    case "decompress": {
      decompress(dirname, params);
      break;
    }
    default:
      console.error(`Invalid input`);
      homeDir();
  }
};
