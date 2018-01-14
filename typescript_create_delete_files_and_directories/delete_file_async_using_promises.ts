import {readFile, unlink, writeFile} from "fs";

// use Promise chaining to avoid callback hell

// myWrite :: String -> String -> Promise<String>
let myWrite = pathname => content => {
    return new Promise(((resolve, reject) => {
        writeFile(pathname, content, "utf8", (err => {
            if (err) reject(err);
            else resolve(pathname);
        }))
    }))
};

// myRead :: String -> Promise<String>
let myRead = pathname => {
    return new Promise(((resolve, reject) => {
        readFile(pathname, "utf8", ((err, data) => {
            if (err) reject(err);
            else resolve(data)
        }))
    }))
};

// myDelete :: String -> Promise<String>
let myDelete = pathname => {
    return new Promise(((resolve, reject) => {
        unlink(pathname, (err => {
            if (err) reject(err);
            else resolve(`${pathname} has been deleted`)
        }))
    }))
};

// myTap :: String -> String -> Promise<String>
// peek the value inside the Promise and then restore composition
let myTap = pathname => str => {
    return new Promise(resolve => {
        console.log(str);
        resolve(pathname)
    })
};

let filename: String = 'fileToBeDeletedAsync.txt';

let myTapPartiallyApplied = myTap(filename);

myWrite(filename)("I will be deleted soon")
    .then(str => myTapPartiallyApplied(`${str} has been created`))
    .then(myRead)
    .then(content => myTapPartiallyApplied(`file content: ${content}`))
    //.then(() => Promise.resolve(filename))
    // swap in a new Promise wrapping the pathname string to restore composition;
    // not needed any more, use myTapPartiallyApplied() instead
    .then(myDelete) // feed the pathname string to myDelete()
    .then(console.log)
    .catch(err => console.log(err)); // catch error in one spot