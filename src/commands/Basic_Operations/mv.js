import path from "node:path";
import fsPromises from "node:fs/promises";
import { homeDir } from "../../helpers/homeDir.js";
import { cp } from "./cp.js";
import { rm } from "./rm.js";

export async function mv(dirname, params) {
  await cp(dirname, params)
    .then(async () => {
      await rm(dirname, params);
    })
    .catch((err) => {
      console.error("Operation failed");
      homeDir();
    });
}
