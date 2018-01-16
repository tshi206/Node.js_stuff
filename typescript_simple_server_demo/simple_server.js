"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
let mutableArrayList = [];
let loremIpsumStream = fs_1.createReadStream(`${__dirname}/lorem_ipsum.txt`, 'utf8');
loremIpsumStream.on('open', (fd => console.log(`file opened with fd: ${fd}`)));
loremIpsumStream.on('close', () => {
    console.log('read stream closed');
    // fire all tasks when read stream closed
    Promise.all(mutableArrayList.map(task => task().then(console.log)))
        .then(() => console.log("that's all I have read.")).catch(console.log);
});
// 'readable' event listens to the first data chunk and the last data chunk
loremIpsumStream.on("readable", (() => console.log("last chunk read")));
loremIpsumStream.on("data", (chunk) => {
    let index = mutableArrayList.push(() => {
        return new Promise((resolve => {
            resolve(chunk);
        }));
    }); // store each chunk of data in ReadStreamTask and push them in the array
    console.log(`new chunk read, resolving in Promise. Index: ${--index}`);
});
//_(loremIpsumStream).pipe(createWriteStream("test.txt", "utf8")); // pipe to writable stream
//_(loremIpsumStream).map((data) => {return Promise.resolve(data)}).each(console.log); // wrap each chunk in Promise
/*
let simpleServer = createServer(((request, response) => {
    console.log(`request made from : ${request.url}`);
    response.writeHead(200, {"Content-Type" : "text/plain"});
    response.end("hey there", "utf8",
        () => console.log("response has been sent"))
}));

simpleServer.listen(13000, "127.0.0.1");
console.log('server now listening at port 13000. (to terminate : Ctrl + C)');
*/ 
//# sourceMappingURL=simple_server.js.map