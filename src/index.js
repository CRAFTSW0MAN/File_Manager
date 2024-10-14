import path from "node:path";
import readline from "node:readline";
import url from "node:url";
import fs from "node:fs";
import fsPromises from "node:fs/promises";
// import {executeCommand} from './commands/controller.js'

function homeDir() {
  const homeDirectory = process.cwd();
  console.log(`You are currently in ${homeDirectory}\n`);
}

export const executeCommand = async (command) => {
  const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
  const [cmd, ...params] = command.split(" ");
  switch (cmd) {
    case "cat": {
      const filePath = path.join(__dirname, params[0]);
      const readStream = fs.createReadStream(filePath);
      readStream.on("data", (text) => {
        process.stdout.write(`${text}\n`);
        homeDir();
      });
      readStream.on("error", (error) => {
        console.error(`File ${path.basename(filePath)} read operation failed`);
        homeDir();
      });

      break;
    }
    case "add": {
      const newFileName = params[0];
      const filePath = path.join(__dirname, newFileName);
      const readStream = fs.createWriteStream(filePath, "utf-8", ``, (err) => {
        if (err) {
          console.error(`Error creating file: ${err.message}`);
          homeDir();
        } else {
          console.log(`${newFileName} created.`);
          homeDir();
        }
      });
      break;
    }
    case "rm": {
      const fileToDelete = path.resolve(__dirname, params[0]);
      await fsPromises
        .rm(fileToDelete, {
          force: false,
          recursive: true,
        })
        .then(()=>{
          homeDir();
        })
        .catch((err) => {
          console.error("FS operation failed:", err);
          homeDir();
        });
      break;
    }
    default:
      console.error(`Invalid input: ${command}`);
  }
};

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

const exit = () => {
  process.stdout.write(
    `\nThank you for using File Manager, ${username}, goodbye!\n`
  );
  homeDir();
  process.exit(1);
};

task.on("line", (data) => {
  const command = data.toString().trim().toLowerCase();
  if (command === "exit") {
    exit();
  } else {
    executeCommand(command);
  }
});
task.on("SIGINT", () => {
  exit();
});
