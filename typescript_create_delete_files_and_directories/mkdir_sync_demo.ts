import {mkdirSync, rmdirSync} from "fs";

mkdirSync('stuff');

setTimeout(() => {
    // Just 'sleep' for 10 sec.
    // Then remove the 'stuff' dir
    rmdirSync('stuff');
}, 10000);