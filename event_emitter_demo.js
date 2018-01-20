var events = require("events"); //global module
var util = require("util"); //global module

var stuff = require("./stuff"); //customized module

console.log("Node.js_templates tutorial");

console.log(["cate", "mike", "james", "mary", "jone"]);
console.log(stuff.counter(["cate", "mike", "james", "mary", "jone"]));
console.log("5 + 6 = " + stuff.adder(5, 6));
console.log("pi is: ".concat(stuff.pi));
console.log("pi plus 9 is: " + (stuff.pi + 9));
console.log(["cate", "mike", "james", "mary", "jone"].filter(name => name !== "mike").map(name => name + " david"));

var Person = function (name) {
    this.name = name;
};

util.inherits(Person, events.EventEmitter);

var james = new Person("james");
var cate = new Person("cate");
var mike = new Person("mike");

var people = [james, cate, mike];
people.forEach(p => { // brackets are optional only for single argument
    p.on("speak", (msg, action) =>{
        console.log(p.name + " says " + msg);
        console.log(p.name + " wanna " + action);
    })
});

var ArrayWithMike = people.filter(p => p.name === "mike")
    .map(mike => mike.on("die", () => console.log(mike.name + " is dead")));

people.forEach(p => {
    p.emit("speak", "hi", "die");
});

console.log(ArrayWithMike[0].name + " is left behind.");
mike.emit("die");

people.filter(p => p.name !== "mike").map(name => name.emit("speak", "well done mike", "die too"));