// node.js built-in rmdir() is actually calling the POSIX 'rm' command
// which is not recursive by default. If you want a recursive function
// calling the 'rm -rf' command for example, try the library 'rimraf'
// by running 'npm install --save rimraf'.
// REF_1: https://stackoverflow.com/questions/12627586/is-node-js-rmdir-recursive-will-it-work-on-non-empty-directories
// REF_2: https://github.com/isaacs/rimraf

import {rmdir, unlink} from "fs";

unlink('./stuffAsync/helloWorldAsync.txt', err => {
    if (err) throw err;
    else rmdir('./stuffAsync', err2 => {if (err2 !== null) console.log(err2)})
});