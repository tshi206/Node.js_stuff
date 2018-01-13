import {readFile, writeFile, readFileSync, writeFileSync} from "fs";

//synchronous demo, blocking
let readData = readFileSync('readMe.txt', 'utf8');
console.log(readData);
writeFileSync('writeMe_with_ts.txt', readData);

//asynchronous demo, non-blocking
readFile('readMe.txt', 'utf8', ((err, data) => {
    console.log('gonna write to file');
    writeFile('writeMeAsync_with_ts.txt', `${data}. This is an async write.`,
        (somethingWrongHappened) => {
            if (somethingWrongHappened === null) console.log("done");
            else console.log(somethingWrongHappened); // log the error if any
        });
}));
console.log("see who's the first?");