import {mkdir, readFile, writeFile} from "fs";

// callback hell
mkdir('stuff', (err => {
    if (err) throw err;
    else readFile('helloWorld.txt', 'utf8', ((err2, data) => {
        if (err2) throw err2;
        else writeFile('./stuff/helloWorldAsync.txt', data, err3 => {
            if (err3) throw err3;
            else readFile('./stuff/helloWorldAsync.txt', 'utf8', ((err4, data2) => {
                if (err4) throw err4;
                else console.log(data2)
            }))
        })
    }))
}));