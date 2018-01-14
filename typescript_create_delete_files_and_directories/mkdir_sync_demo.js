"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
fs_1.mkdirSync('stuff');
setTimeout(() => {
    // Just 'sleep' for 10 sec.
    // Then remove the 'stuff' dir
    fs_1.rmdirSync('stuff');
}, 10000);
//# sourceMappingURL=mkdir_sync_demo.js.map