"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
// callback hell
fs_1.mkdir('stuff', (err => {
    if (err)
        throw err;
    else
        fs_1.readFile('helloWorld.txt', 'utf8', ((err2, data) => {
            if (err2)
                throw err2;
            else
                fs_1.writeFile('./stuff/helloWorldAsync.txt', data, err3 => {
                    if (err3)
                        throw err3;
                    else
                        fs_1.readFile('./stuff/helloWorldAsync.txt', 'utf8', ((err4, data2) => {
                            if (err4)
                                throw err4;
                            else
                                console.log(data2);
                        }));
                });
        }));
}));
//# sourceMappingURL=mkdir_async_demo_with_callback_hell.js.map