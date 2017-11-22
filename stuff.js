var counter = function(arr){
    return "there are " + arr.length + " elements in this array";
};

var adder = function (a, b) {
    return a + b;
};

const pi = 3.1415926;

console.log(counter(["cate", "mike", "james"]));

module.exports = {
    counter : counter,
    adder : adder,
    pi : pi
};