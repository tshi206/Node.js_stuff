let fs = require('fs');

//synchronous demo, blocking
let readData = fs.readFileSync('readMe.txt', 'utf8');
console.log(readData);
fs.writeFileSync('writeMe.txt', readData);

//asynchronous demo, non-blocking
fs.readFile('readMe.txt', 'utf8', ((err, data) => {
    console.log('gonna write to file');
    fs.writeFile('writeMeAsync.txt', `${data}. This is an async write.`,
        (somethingWrongHappened) => {
            if (somethingWrongHappened === null) console.log("done");
            else console.log(somethingWrongHappened); // log the error if any
        });
}));
console.log("see who's the first?");