let apply = (acc, val) => val(acc);

// ...funcs ::[param], multiple params in this param group will be packed into a single collection (Functor).
let compose = (...funcs) => x => funcs.reduce(apply, x);

// add1 :: Number -> Number
export let plus1 = x => x + 1;
// add2 :: Number -> Number
export let plus2 = x => x + 2;
// partially applied compose, waiting for a starting value
let plus3 = compose(plus1, plus2);

console.log(plus3(5)); //8
