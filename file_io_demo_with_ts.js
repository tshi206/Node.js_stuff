"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
//synchronous demo, blocking
let readData = fs_1.readFileSync('readMe.txt', 'utf8');
console.log(readData);
fs_1.writeFileSync('writeMe_with_ts.txt', readData);
//asynchronous demo, non-blocking
fs_1.readFile('readMe.txt', 'utf8', ((err, data) => {
    console.log('gonna write to file');
    fs_1.writeFile('writeMeAsync_with_ts.txt', `${data}. This is an async write.`, (somethingWrongHappened) => {
        if (somethingWrongHappened === null)
            console.log("done");
        else
            console.log(somethingWrongHappened); // log the error if any
    });
}));
console.log("see who's the first?");
//# sourceMappingURL=file_io_demo_with_ts.js.map