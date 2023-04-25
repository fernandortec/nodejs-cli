#! /usr/bin/env node

import { Command } from "commander";
import figlet from "figlet";
import path from "path";
import { createDir, listDir } from "./dirManagement";
import { createFile } from "./fileManagement";

const program = new Command();
console.log(figlet.textSync("Dir manager"));

program
  .version("1.0.0")
  .description("An examlpe CLI for managing a directory")
  .option("-l, --ls [value]", "List directory contents")
  .option("-m, --mkdir <value>", "Create a directory")
  .option("--t, --touch <value>", "Create a file")
  .parse(process.argv);

const options: { ls: string; mkdir: string; touch: string } = program.opts();

if (options.ls) {
  const filePath = typeof options.ls === "string" ? options.ls : __dirname;
  listDir(filePath);
} else if (options.mkdir) {
  createDir(path.resolve(__dirname, options.mkdir));
} else if (options.touch) {
  createFile(path.resolve(__dirname, options.touch));
}

if (!process.argv.slice(2).length) {
  program.outputHelp();
}
