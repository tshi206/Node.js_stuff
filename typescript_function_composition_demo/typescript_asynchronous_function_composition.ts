import {plus1, plus2} from "./typescript_synchronous_function_composition";

// compose sync functions together with async functions using Promise

let applyAsync = (acc, val) => acc.then(val);
let composeAsync = (...funcs) => x => funcs.reduce(applyAsync, Promise.resolve(x));

// add3 is an async function returning a Promise
// add3 :: Number -> Promise<Number>
let add3: (x) => Promise<number> = x => {
    return new Promise<number>(((resolve, reject) => { // reject is ignored for the sake of simplicity
        setTimeout(() => resolve(x + 3), 1500)
    })) // add 3 to x after 1.5 sec
};
let add4 = x => x + 4;
let plus7 = composeAsync(add3, add4);

// makeMany :: Number -> [Number]
let makeMany = x => [x,x,x,x,x];
// allString :: [Number] -> [String]
let allString = xs => xs.map(String);
// makeStatement :: [String] -> [String]
let makeStatement = xs => xs.map(x => `Your name is ${x}`);

// pipeline1 :: Number -> [Number]
let pipeline1 = composeAsync(plus7, plus1, plus2, makeMany);
// pipeline2 :: [Number] -> [String]
let pipeline2 = composeAsync(allString, makeStatement);

// outputAll :: [String] -> Unit
let outputAll = xs => xs.map(x => console.log(x));

pipeline1(2) // 2 + 7 + 1 + 2 = 12 => [12, 12, 12, 12, 12]
.then(pipeline2) //[12, 12, 12, 12, 12] => ['12', '12', '12', '12', '12'] => ['Your name is 12', ...]
.then(outputAll)
.catch(x => console.log('Error: ' + x));

// pipeline :: Number -> [String]
let pipeline = composeAsync(pipeline1, pipeline2);
pipeline(5).then(outputAll).catch(x => console.log('ERROR: ' + x));
