"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
class ImmutableDataCarrier {
    constructor(_dir_name, _file_name, _content) {
        this._dir_name = _dir_name;
        this._file_name = _file_name;
        this._content = _content;
    }
    get dir_name() { return this._dir_name; }
    get file_name() { return this._file_name; }
    get content() { return this._content; }
}
// monadicMkdir :: String -> Promise<ImmutableDataCarrier>
let monadicMkdir = dir_name => {
    return new Promise(((resolve, reject) => {
        fs_1.mkdir(dir_name, err => {
            if (err)
                reject(err);
            else
                resolve(new ImmutableDataCarrier(dir_name, null, null));
        });
    }));
};
// readHelloWorld :: ImmutableDataCarrier -> Promise<ImmutableDataCarrier>
let readHelloWorld = (dataCarrier) => {
    return new Promise(((resolve, reject) => {
        fs_1.readFile('./helloWorld.txt', 'utf8', ((err, data) => {
            if (err)
                reject(err);
            else
                resolve(new ImmutableDataCarrier(dataCarrier.dir_name, dataCarrier.file_name, data));
        }));
    }));
};
// monadicWrite :: ImmutableDataCarrier -> Promise<ImmutableDataCarrier>
let monadicWrite = (dataCarrier) => {
    return new Promise(((resolve, reject) => {
        let filename = dataCarrier.file_name === null ? 'helloWorldAsync.txt' : dataCarrier.file_name;
        fs_1.writeFile(`./${dataCarrier.dir_name}/${filename}`, dataCarrier.content, (err => {
            if (err)
                reject(err);
            else
                resolve(new ImmutableDataCarrier(dataCarrier.dir_name, filename, dataCarrier.content));
        }));
    }));
};
// monadicRead :: ImmutableDataCarrier -> Promise<String>
let monadicRead = (dataCarrier) => {
    return new Promise((resolve, reject) => {
        fs_1.readFile(`./${dataCarrier.dir_name}/${dataCarrier.file_name}`, 'utf8', ((err, data) => {
            if (err)
                reject(err);
            else if (data !== dataCarrier.content)
                reject('Warning: file content has been modified');
            else
                resolve(data);
        }));
    });
};
monadicMkdir('stuffAsync')
    .then(readHelloWorld)
    .then(monadicWrite)
    .then(monadicRead)
    .then(console.log)
    .catch(console.log);
//# sourceMappingURL=mkdir_async_demo_with_promises.js.map