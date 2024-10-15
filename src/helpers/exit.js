import {homeDir} from './homeDir.js'

export const exit = (username) => {
  process.stdout.write(
    `\nThank you for using File Manager, ${username}, goodbye!\n`
  );
  homeDir();
  process.exit(1);
};