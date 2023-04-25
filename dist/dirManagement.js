"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listDir = exports.createDir = void 0;
const fs_1 = require("fs");
const fs_2 = require("fs");
const path_1 = require("path");
const createDir = (filePath) => {
    if (!(0, fs_1.existsSync)(filePath)) {
        (0, fs_1.mkdirSync)(filePath);
        console.log("The directory has been created successfully!");
    }
};
exports.createDir = createDir;
const listDir = (filePath) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const files = yield fs_2.promises.readdir(filePath);
        const detailedFilesPromises = files.map((file) => __awaiter(void 0, void 0, void 0, function* () {
            const { size, birthtime } = yield fs_2.promises.lstat((0, path_1.resolve)(filePath, file));
            return { filename: file, "size(KB)": size, created_at: birthtime };
        }));
        const detailedFiles = yield Promise.all(detailedFilesPromises);
        console.table(detailedFiles);
    }
    catch (err) {
        console.error("Error occured while reading the directory", err);
    }
});
exports.listDir = listDir;
//# sourceMappingURL=dirManagement.js.map