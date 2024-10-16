import path from "node:path";
import fs from "node:fs";
import { createBrotliCompress } from "zlib";
import {correct_Name_File} from '../../helpers/correct_Name_File.js';
import {homeDir} from '../../helpers/homeDir.js'

// export async function compress(dirname, params) {
//   if (
//     oldPath &&
//     newPath &&
//     correct_Name_File(oldPath) &&
//     correct_Name_File(newPath)
//   ) {
//     const filePath = path.join(dirname, oldPath);
//     const destinationFilePath = path.join(dirname, newPath);
//     const gBrotli = createBrotliCompress();
//     console.log(filePath,destinationFilePath,gBrotli)
//     const readStream = fs.createReadStream(filePath);
//     const writeStream = fs.createWriteStream(destinationFilePath, {
//       flags: "wx",
//     });

//     readStream.pipe(gBrotli).pipe(writeStream);
//     writeStream.on("close", () => homeDir());
//     gBrotli.on("error", (err) => {
//       new Error("Operation failed");
//     });
//     readStream.on("error", (err) => {
//       new Error("Operation failed");
//     });
//     writeStream.on("error", (err) => {
//       new Error("Operation failed");
//     });

//     writeStream.close();
//   }else{
//     console.error("Invalid input");
//     homeDir();
//   }
 
// }