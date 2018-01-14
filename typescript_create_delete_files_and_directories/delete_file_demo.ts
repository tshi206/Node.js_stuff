import {readFile, unlink, writeFile} from "fs";

// pyramid of doom

writeFile("gonnaBeDeleted.txt", "I will be deleted", (err => {
    if (err === null) readFile("gonnaBeDeleted.txt", "utf8", ((err2, data) => {
        if (err2 === null) {
            console.log(`${data} in 2000 ms`);
            setTimeout(() => {
                unlink("gonnaBeDeleted.txt", (err3 => {
                    if (err3 === null) console.log("file successfully deleted");
                    else throw err3;
                }))
            }, 2000);
        }
        else throw err2;
    }));
    else throw err}));
