import path from "node:path";
import fs from "node:fs";
import readline from "node:readline";

const args = process.argv.find((arg) => arg.startsWith("--username="));
if (!args) {
  console.error('Username is required. Use --username=your_username');
  process.exit(0);
}
const username = args.split('=')[1];
const task = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const exit = () => {
  console.log(`\nThank you for using File Manager, ${username}, goodbye!`);
  process.exit(1);
}

task.write(`Welcome to the File Manager, ${username}!\n`);
task.on('line', (data) => {
  if (data.toString().trim().toLowerCase() === 'exit') {
    exit();
  }
});
task.on('SIGINT', () => {
  exit();
});