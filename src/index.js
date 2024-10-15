import path from "node:path";
import readline from "node:readline";
import url from "node:url";
import {executeCommand} from './commands/controller.js'
import {homeDir} from './helpers/homeDir.js';
import {exit} from './helpers/exit.js'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const args = process.argv.find((arg) => arg.startsWith("--username="));
if (!args) {
  console.error("Username is required. Use --username=your_username");
  homeDir();
  process.exit(0);
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
  if (command === "exit") {
    exit(username);
  } else {
    executeCommand(command, __dirname);
  }
});
task.on("SIGINT", () => {
  exit(username);
});
