import os from "node:os";
import { homeDir } from "../../helpers/homeDir.js";

export function osSystem(params) {
  switch (params[0]) {
    case "--eol" || "--EOL": {
      console.log("`Default system EOL:", JSON.stringify(os.EOL));
      break;
    }
    case "--cpus": {
      const cpus = os.cpus();
      console.log(`Total number of processors: ${cpus.length}`);
      const cpusTable = cpus.map((cpu, index) => ({
        'Processor': index + 1,
        'Model': cpu.model,
        'Clock Rate(GHz)': cpu.speed / 1000,
      }));
      console.table(cpusTable);
      break;
    }
    case "--homedir": {
      console.log("Home Catalogue:", os.homedir());
      break;
    }
    case "--username": {
      console.log("User Name:", os.userInfo().username);
      break;
    }
    case "--architecture": {
      console.log("CPU Architecture:", os.arch());
      break;
    }
    default: {
      console.error("Invalid input");
    }
  }
  homeDir();
}
