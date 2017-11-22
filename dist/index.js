"use strict";

var events = require("events"); //global module
var util = require("util"); //global module

var stuff = require("./stuff"); //customized module

console.log("Node.js tutorial");

console.log(["cate", "mike", "james", "mary", "jone"]);
console.log(stuff.counter(["cate", "mike", "james", "mary", "jone"]));
console.log("5 + 6 = " + stuff.adder(5, 6));
console.log("pi is: ".concat(stuff.pi));
console.log("pi plus 9 is: " + (stuff.pi + 9));
console.log(["cate", "mike", "james", "mary", "jone"].filter(function (name) {
    return name != "mike";
}).map(function (name) {
    return name + " david";
}));

var Person = function Person(name) {
    this.name = name;
};

util.inherits(Person, events.EventEmitter);

var james = new Person("james");
var cate = new Person("cate");
var mike = new Person("mike");

var people = [james, cate, mike];
people.forEach(function (p) {
    // brackets are optional only for single argument
    p.on("speak", function (msg, action) {
        console.log(p.name + " says " + msg);
        console.log(p.name + " wanna " + action);
    });
});

var ArrayWithMike = people.filter(function (p) {
    return p.name === "mike";
}).map(function (mike) {
    return mike.on("die", function () {
        return console.log(mike.name + " is dead");
    });
});

people.forEach(function (p) {
    p.emit("speak", "hi", "die");
});

console.log(ArrayWithMike[0].name + " is left behind.");
mike.emit("die");

people.filter(function (p) {
    return p.name !== "mike";
}).map(function (name) {
    return name.emit("speak", "well done mike", "die too");
});
//# sourceMappingURL=index.js.map