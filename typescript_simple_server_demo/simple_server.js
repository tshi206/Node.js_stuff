"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const fs_1 = require("fs");
const _ = require("highland");
let mutableArrayList = [];
let loremIpsumStream = fs_1.createReadStream(`${__dirname}/lorem_ipsum.txt`, 'utf8');
let loremIpsumWriteStream = fs_1.createWriteStream(`${__dirname}/lorem_ipsum_simul_write.txt`, 'utf8');
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
    // simultaneously write this chunk to a Writable stream
    loremIpsumWriteStream.write(chunk, () => console.log(`chunk No. ${index} has been written to destination ${loremIpsumWriteStream.path}`));
});
// note that we can ONLY pipe FROM a Readable stream because there is no way to get the chunks out from within a NON-READABLE (e.g. writable) stream
_(loremIpsumStream).pipe(fs_1.createWriteStream("lorem_ipsum_simul_write_via_pipe.txt", "utf8")); // pipe to writable stream and write to the destination
//_(loremIpsumStream).map((data) => {return Promise.resolve(data)}).each(console.log); // wrap each chunk in Promise
let simpleServer = http_1.createServer(((request, response) => {
    console.log(`request made from : ${request.url}`);
    // setHeader() must be called before writeHead(). see ref: https://stackoverflow.com/questions/7042340/error-cant-set-headers-after-they-are-sent-to-the-client
    response.setHeader("Location", "https://masonshi23.wixsite.com/website");
    response.writeHead(302, { "Content-Type": "text/html" }); // change status code to 302 to indicate a redirection
    //response.writeHead(200, {"Content-Type" : "text/html"});
    // be aware that the Response itself is also classified as a Writable stream so we can pipe a readable stream to it
    //createReadStream(__dirname+"/lorem_ipsum.txt", "utf8").pipe(response);
    // you can manually listen to the 'finish' event on the piped stream
    // createReadStream(__dirname+"/index.html", "utf8")
    //     .pipe(response)
    //     .on('finish', () => console.log(`response has been sent to ${request.url}`));
    response.end("redirecting to your worst nightmare", "utf8", () => console.log("response has been sent")); // response will be ended by pipe instead if you use pipe
}));
simpleServer.listen(13000, "127.0.0.1");
console.log('server now listening at port 13000. (to terminate : Ctrl + C)');
//# sourceMappingURL=simple_server.js.map