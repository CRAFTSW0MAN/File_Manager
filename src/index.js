import path from "node:path";
import readline from "node:readline";
import url from "node:url";
import {executeCommand} from './commands/controller.js'
import {homeDir} from './helpers/homeDir.js';
import {exit} from './helpers/exit.js'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
let args = process.argv.find((arg) => arg.startsWith("--username="));
if (!args) {
  args="--username=Anonymous";
}
const username = args.split("=")[1];
const task = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

task.write(`Welcome to the File Manager, ${username}!\n`);
homeDir();

task.on("line", (data) => {
  const command = data.toString().trim().toLowerCase();
  if (command === ".exit") {
    exit(username);
  } else {
    executeCommand(command, __dirname);
  }
});
task.on("SIGINT", () => {
  exit(username);
});
