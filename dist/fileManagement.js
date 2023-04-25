"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFile = void 0;
const fs_1 = require("fs");
const createFile = (filePath) => {
    (0, fs_1.openSync)(filePath, "w");
    console.log('An empty file has been created successfully!');
};
exports.createFile = createFile;
//# sourceMappingURL=fileManagement.js.map