"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
// pyramid of doom
fs_1.writeFile("gonnaBeDeleted.txt", "I will be deleted", (err => {
    if (err === null)
        fs_1.readFile("gonnaBeDeleted.txt", "utf8", ((err2, data) => {
            if (err2 === null) {
                console.log(`${data} in 2000 ms`);
                setTimeout(() => {
                    fs_1.unlink("gonnaBeDeleted.txt", (err3 => {
                        if (err3 === null)
                            console.log("file successfully deleted");
                        else
                            throw err3;
                    }));
                }, 2000);
            }
            else
                throw err2;
        }));
    else
        throw err;
}));
//# sourceMappingURL=delete_file_demo.js.map