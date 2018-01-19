import {createServer, request} from "http";
import {createReadStream, createWriteStream} from "fs";
import * as _ from 'highland';
import * as ResponseBuilder from './NaiveHTTPResponseBuilder';

// type alias for '() => Promise<String>'
type ReadStreamTask = () => Promise<String>;
let mutableArrayList: Array<ReadStreamTask> = [];

let loremIpsumStream = createReadStream(`${__dirname}/lorem_ipsum.txt`, 'utf8');
let loremIpsumWriteStream = createWriteStream(`${__dirname}/lorem_ipsum_simul_write.txt`, 'utf8');

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
        return new Promise<String>((resolve => {
            resolve(chunk);
        }))
    }); // store each chunk of data in ReadStreamTask and push them in the array
    console.log(`new chunk read, resolving in Promise. Index: ${--index}`);

    // simultaneously write this chunk to a Writable stream
    loremIpsumWriteStream.write(chunk, () => console.log(`chunk No. ${index} has been written to destination ${loremIpsumWriteStream.path}`));
});

// note that we can ONLY pipe FROM a Readable stream because there is no way to get the chunks out from within a NON-READABLE (e.g. writable) stream
_(loremIpsumStream).pipe(createWriteStream("lorem_ipsum_simul_write_via_pipe.txt", "utf8")); // pipe to writable stream and write to the destination
//_(loremIpsumStream).map((data) => {return Promise.resolve(data)}).each(console.log); // wrap each chunk in Promise



let simpleServer = createServer(((request, response) => {
    console.log(`request made from : ${request.url}`);

    ResponseBuilder.NaiveHTTPResponseBuilder(request, response);
}));

simpleServer.listen(13000, "127.0.0.1");
console.log('server now listening at port 13000. (to terminate : Ctrl + C)');
