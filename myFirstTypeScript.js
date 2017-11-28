class Whatever {
    constructor() {
        this.sideEffect = "ugly effect";
    }
    Whatever(someStuff) {
    }
}
function addBR(someStr) {
    return someStr + "<br />";
}
// var myName : string = "Big Brother";
// var myAge : number = 41;
// var canVote : boolean = true;
// var someshit: any = "ugly code";
//who wants some FP?
let myName = "Big Brother";
let myAge = 41;
let canVote = true;
let someShit = "ugly code";
someShit = 2;
document.getElementById("tsStuff")
    .innerHTML = myName + " replaced 'Some Stuff' ";
document.write("myName is " + typeof (myName)
    + "<br />");
document.write("canVote is " + typeof (canVote)
    + "<br />");
document.write("myAge  is " + typeof (myAge)
    + "<br />");
document.write("someShit  is " + typeof (someShit)
    + "<br />");
let strToNum = parseInt("5");
let numToStr = 5;
document.write("numToStr is a " + typeof (numToStr) + "<br />");
document.write("numToStr is a " + typeof (numToStr.toString()) + "<br />");
//hi im immutable
const PI = 3.14159;
let superman = {
    realName: 'Clark Kent',
    superName: "Superman"
};
//superman = {}; gets u undefined in each field
document.write(superman.realName + " is " +
    superman.superName + "<br />");
let employees = ["Bob", "Sally", "Sam"];
employees.push(5 + "");
document.write(addBR(employees.toString()));
let newEmployees = employees.map((member) => {
    return member + " eats curry";
});
document.write(addBR(newEmployees.toString()));
document.write(addBR(employees.map((member, index) => {
    return member + " is at index No. " + index;
}).toString()));
const superHeroes = [];
superHeroes.push({
    realName: 'Bruce Wayne',
    superName: "Batman"
});
superHeroes.push(superman);
//make some fucking side effect in forEach
superHeroes.forEach((hero) => {
    document.write(addBR(hero.realName +
        " is " + hero.superName));
});
document.write(addBR("5 + 4 = " + (5 + 4)));
let num = 1;
//num++ will be first written and then incremented
//++num will be first incremented and then written
//num-- will be first written and then decremented
//--num will be first decremented and then written
document.write(addBR("num++ = " + num++)); //2
document.write(addBR("++num = " + ++num)); //3
document.write(addBR("num-- = " + num--)); //2
document.write(addBR("--num = " + --num)); //1
//difference between let and var
let sampLet = 123;
if (true) {
    let sampLet = 456; //both let and const are block-scoped and behave more strictly
}
document.write(addBR(sampLet));
var sampVar = 123;
if (true) {
    var sampVar = 456; //var is not block-scoped
}
document.write(addBR(sampVar));
let randArray = [5, 6, 7, 8];
for (var val in randArray) {
    document.write(addBR(val));
}
const mapping = Array.prototype.map; //Using map generically
let strArray = mapping.call(randArray, (member) => {
    return member.toString();
}); //or simply strArray = randArray.map(String);
for (val of strArray) {
    document.write(addBR(val));
}
//almost the same as Scala's function signature
let getSum = function (num1, num2) {
    return num1 + num2;
};
let theSum1 = getSum(5, 2);
document.write(addBR("5 + 2 = " + theSum1));
let getDifference = function (num1, num2 = 2, num3) {
    if (typeof num3 !== 'undefined') {
        return num1 - num2 - num3;
    }
    return num1 - num2;
};
document.write(addBR("5 - 2 = "
    + getDifference(5)));
document.write(addBR("5 - 2 - 3 = "
    + getDifference(5, 2, 3)));
let sumAll = function (...nums) {
    return nums.reduce((a, b) => {
        return a + b;
    }, 0);
};
document.write(addBR(sumAll(1, 2, 3, 4, 5)));
let factorial = function (num, factorialSoFar = 1) {
    if (num === 0) {
        return factorialSoFar;
    }
    return factorial(num - 1, num * factorialSoFar);
};
document.write(addBR(factorial(15)));
//assigning an anonymous function to a variable has
//no difference from declaring an explicit function tho
//hence this one is explicitly declared
function fibonacci(num, fibSoFar = 0) {
    if (num === 0) {
        return fibSoFar;
    }
    return fibonacci(num - 1, num + fibSoFar);
}
document.write(addBR(fibonacci(5)));
//fancy way to write anonymous functions using lambda
//trying to pretend this is functional
//Scala people and F# people gonna be grumpy for this
let doStuff = (x) => {
    if (x > 15) {
        return fibonacci(x);
    }
    else {
        return factorial(x);
    }
};
document.write(addBR(doStuff(15)));
document.write(addBR(doStuff(16)));
/*
Java people gonna love this
 */
class Hero {
    //parameters marked by private will be automatically
    //initialized as fields by the constructor
    //using the value passed in
    constructor(gender, realName, superName, isRich) {
        this.isRich = isRich;
        //don't need to initialize isRich in the body
        this.gender = gender;
        this.realName = realName;
        this.superName = superName;
        Hero.universe = 52;
    }
    //Note that TypeScript's class constructors are
    //all called 'constructor'. This is different
    //from Java.
    //This method though looks like a constructor
    //in Java however in TypeScript it is just a
    //setter method for the private field 'gender'
    Hero(gender) {
        this.gender = gender;
    }
    getGender() {
        return this.gender;
    }
    //different way to define getters
    get weakness() {
        return this._weakness;
    }
    //different way to define setters
    //A set method cannot have a return type annotation
    set weakness(weakness) {
        this._weakness = weakness;
    }
    // public says() {
    //     return this.isRich ?
    //         "I'm rich" : "I can fly";
    // }
    // ternary works though compiler will complain
    // bout the type mismatch on the override method
    says() {
        let word;
        if (this.isRich) {
            word = "I'm rich";
        }
        else {
            word = "I can fly";
        }
        return word;
    }
    static WhatsTheUniverse() {
        return Hero.universe;
    }
}
let clark = new Hero("male", "Clark Kent", "Superman", false);
let bruce = new Hero("male", "Bruce Wayne", "Batman", true);
let diana = new Hero("male", "Diana Prince", "Wonder Woman", false);
document.write(addBR("diana's gender is " +
    diana.getGender()));
diana.Hero("female");
document.write(addBR("diana's gender is " +
    diana.getGender()));
document.write(addBR("superman's weakness is "
    + clark.weakness));
clark.weakness = "Kryptonite";
document.write(addBR("superman's weakness is "
    + clark.weakness));
document.write(addBR(bruce.realName + " is "
    + bruce.superName + " and he says "
    + bruce.says()));
document.write(addBR(clark.realName + " is "
    + clark.superName + " and he says "
    + clark.says()));
document.write(addBR(diana.realName + " is "
    + diana.superName + " and she says "
    + diana.says()));
document.write(addBR("They are in the "
    + Hero.universe + "th universe"));
document.write(addBR("They are in the "
    + Hero.WhatsTheUniverse() + "th universe"));
class Villain extends Hero {
    constructor(gender, realName, superName, isRich) {
        super(gender, realName, superName, isRich);
        Hero.universe = 52;
    }
    says() {
        return "I'm the bad guy";
    }
}
let joker = new Villain("male", "unknown", "Joker", true);
document.write(addBR(joker.realName + " is "
    + joker.superName + " and he says "
    + joker.says()));
document.write(addBR("Does Joker have field" +
    " 'isRich' : " + ('isRich' in joker)));
document.write(addBR("Is Joker a Hero: "
    + (joker instanceof Hero)));
document.write(addBR("Is Joker a Villain: "
    + (joker instanceof Villain)));
class Car {
    constructor(wheels) {
        this.wheels = wheels;
    }
    drive() {
        return "I have " + this.wheels + " wheels";
    }
}
class Bike {
    constructor(wheels) {
        this.wheels = wheels;
    }
    drive() {
        return "I have " + this.wheels + " wheels";
    }
}
let car = new Car(4);
let bike = new Bike(2);
document.write(addBR("car says : " +
    car.drive() + " and bike says : " +
    bike.drive()));
function GetWheels(veh) {
    return veh.drive();
}
document.write(addBR(GetWheels(car)));
document.write(addBR(GetWheels(bike)));
class GenericAddableStuff {
}
let aNumber = new GenericAddableStuff();
aNumber.add = (x, y) => x + y;
document.write(addBR("5 + 4 = "
    + aNumber.add(5, 4)));
let aString = new GenericAddableStuff();
aString.add = (x, y) => String(Number(x) + Number(y));
document.write(addBR("5 + 6 = "
    + aString.add("5", "6")));
//destruction syntax
let randVals = { x: 1, y: 2, z: 3 };
let { x, y, z } = randVals;
document.write(addBR(x + y + z));
//load them in an array
//and then flip the array
[x, y, z] = [z, y, x];
document.write(addBR("Switch : " +
    (String(x) + String(y) + String(z))
        .split('').join(' ')));
//back quote
let multStr = `I go on for 
many lines <br />
many many lines <br />
<br />`;
document.write(multStr);
document.write(`<b>${multStr}</b>`);
// spread operator example
// the reason I have to mark all params optional is
// because array spread operator cannot ensure the
// length of array will satisfy the function type
// because Array in JS has dynamic length.
// see https://github.com/Microsoft/TypeScript/issues/4130#issuecomment-303486552
function theSum(x, y, z) {
    document.write("Sum : " +
        (x + y + z) + "<br />");
}
let args = [4, 5, 6];
theSum(...args); //spread operator,
// works but complaints from the compiler
// if the args cannot ensure a minimum length of 3
// sometimes it is hard to enforce strong typing.
// it works in JS anyway so as long as it works in
// browsers then that's fine
var Emotion;
(function (Emotion) {
    Emotion[Emotion["Happy"] = 1] = "Happy";
    Emotion[Emotion["Sad"] = 2] = "Sad";
    Emotion[Emotion["Angry"] = 3] = "Angry";
})(Emotion || (Emotion = {}));
let myFeeling = Emotion.Sad;
//is equivalent to
myFeeling = 2;
//Functors
let nums = [1, 2, 3, 4, 5];
//this is an example of map implementation
//it is not the one from libraries
//fn the function, xs the functor (array in this case)
let map = fn => xs => xs.reduce((accumulate, val) => [...accumulate, fn(val)], []); //[] the initial value for reduce
let explicitTypedMap = (fn) => xs => xs.reduce((accumulate, val) => [...accumulate, fn(val)], []); //[] the initial value for reduce
let typeSafeMap = (fn) => xs => xs.reduce((accumulate, val) => [...accumulate, fn(val)], []);
let encapsulatedTypeMap = (fn) => xs => xs.reduce((accumulate, val) => [...accumulate, fn(val)], []);
let add1 = x => x + 1;
let add2 = x => x + 2;
let pure1 = x => [x];
//curring
let result1 = map(add1)(nums);
let result12 = explicitTypedMap(add1)(nums);
let result13 = typeSafeMap(add2)(nums);
let result14 = encapsulatedTypeMap(add2)(nums);
document.write(addBR(result1));
document.write(addBR(result12));
document.write(addBR(result13));
document.write(addBR(result14));
//Applicative Functors
let addTogether = x => y => x + y;
//partially applied addTogether
//resulting [(y => 1 + y), (y => 2 + y)]
let applicativeFunctor = [1, 2].map(addTogether);
//appMap :: f ( a -> b ) -> f a -> f b
//applicative map for Applicative Functors
//xs the array containing partially applied addTogether Functions
//ys the Functor (a numeric array in this case)
//val the elements from the first param xs, individual partially applied Function in this case
//not type-safe
let appMap = xs => ys => {
    return ys.map(y => {
        return xs.reduce((acc, val) => {
            return [...acc, val(y)];
        }, []); //initial value for reduce, empty array in this case, as we are building it up
    });
};
//for example, we can add two Functors together
//here we are adding [1,2] and [1,2,3,4,5]
//to map a Functor over another Functor
//we use Applicative Functor
//there are built-in implementations I believe
let result = appMap(applicativeFunctor)([1, 2, 3, 4, 5]);
//as result, we get a sequence of 2,3,3,4,4,5,5,6,6,7
//actually it is a 2-d array of:
//[[2,3], [3,4], [4,5], [5,6], [6,7]]
//we add 1 to each value in the [1,2,3,4,5]
//then we add 2 to each value in the [1,2,3,4,5]
//two resulting arrays are reduced down to a single
//array of length of 5 elements
//steps break down:
//map takes out each value from the second Functor one by one
//reduce takes each value fed by map, and each value from the first Functor individually
//reduce apples the value (partially applied function) from the second functor to the value passed by map in each iteration
//reduce adds the two resulting singular array together
//[val(y)] + [val(y)] <=> [(y => 1 + y) (y)] + [(y => 2 + y) (y)] <=> [a num] + [another num] <=> [num1, num2]
//[num1, num2] will be mapped to the corresponding position in the final array
document.write(addBR(result));
document.write(addBR(result[0]));
document.write(addBR(result[1]));
document.write(addBR(result[2]));
document.write(addBR(result[3]));
document.write(addBR(result[4]));
//TODO - Monad
//extremely trivial monad
//pure :: a -> M a
let pure = x => { return { first: x }; };
//monadMap :: M a -> (a -> M b) -> M b
//In fact there are already implementations available in libraries, for example, flatMap
let monadMap = Ma => fn => { return fn(Ma['first']); };
let times10 = x => pure(x * 10);
let firstMonadResult = monadMap(pure(10))(times10);
let secondMonadResult = monadMap(firstMonadResult)(times10);
document.write(addBR(firstMonadResult));
document.write(addBR(secondMonadResult));
document.write(addBR(firstMonadResult['first']));
document.write(addBR(secondMonadResult['first']));
// (trivial) TypeScript version of
// Option Monad in F# (equivalent to
// Maybe Monad in Haskell)
//Option :: Some | None
//Some X
let identity = x => {
    return {
        state: true,
        value: x
    };
};
//Option :: Some | None
//None
let none = _ => {
    return {
        state: false,
        value: 'None'
    };
};
//bind :: M a -> (a -> M b) -> M b
let bind = Ma => fn => {
    return Ma['state'] ?
        fn(Ma['value']) : none(Ma['value']);
};
let add42 = x => identity(x + 42);
let maybe1 = bind(identity(10))(add42);
let maybe2 = bind(none(maybe1))(add42);
let maybe3 = bind(maybe2)(add42);
let maybe4 = bind(maybe1)(add42);
document.write(addBR(maybe1['value']));
document.write(addBR(maybe2['value']));
document.write(addBR(maybe3['value']));
document.write(addBR(maybe4['value']));
//purer Maybe without Objects
let pureMaybe = x => ['Just', x];
let failMaybe = _ => ['Nothing', null];
let just = pureMaybe;
let nothing = failMaybe(null);
let fst = ([x, y]) => x;
let snd = ([x, y]) => y;
let add7 = x => just(x + 7);
let bindMaybe = Ma => fn => {
    return fst(Ma) === 'Just' ?
        fn(snd(Ma)) : nothing;
};
let maybe5 = bindMaybe(just(3))(add7);
let maybe6 = bindMaybe(maybe5)(add7);
let maybe7 = bindMaybe(maybe6)(add7);
let maybe8 = bindMaybe(maybe7)(add7);
let maybeResult = bindMaybe(maybe8)(addBR);
document.write(maybeResult);
let maybeResult2 = bindMaybe(maybe8)((x) => {
    document.write(addBR("little side effect " + x));
});
// trivial Promise
//bind :: M a  -> (a -> M b) -> M b
//then :: M a  -> (a -> M b) -> M b
//then :: M a  -> (a -> b) -> M b
let pure4 = x => Promise.resolve(x);
pure4(10).then(add1).then(console.log).catch((x) => {
    document.write(addBR("Promise caught " + x));
});
//# sourceMappingURL=myFirstTypeScript.js.map