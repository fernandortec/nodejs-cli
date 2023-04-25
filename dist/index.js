#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const figlet_1 = __importDefault(require("figlet"));
const path_1 = __importDefault(require("path"));
const dirManagement_1 = require("./dirManagement");
const fileManagement_1 = require("./fileManagement");
const program = new commander_1.Command();
console.log(figlet_1.default.textSync("Dir manager"));
program
    .version("1.0.0")
    .description("An examlpe CLI for managing a directory")
    .option("-l, --ls [value]", "List directory contents")
    .option("-m, --mkdir <value>", "Create a directory")
    .option("--t, --touch <value>", "Create a file")
    .parse(process.argv);
const options = program.opts();
if (options.ls) {
    const filePath = typeof options.ls === "string" ? options.ls : __dirname;
    (0, dirManagement_1.listDir)(filePath);
}
else if (options.mkdir) {
    (0, dirManagement_1.createDir)(path_1.default.resolve(__dirname, options.mkdir));
}
else if (options.touch) {
    (0, fileManagement_1.createFile)(path_1.default.resolve(__dirname, options.touch));
}
if (!process.argv.slice(2).length) {
    program.outputHelp();
}
//# sourceMappingURL=index.js.map