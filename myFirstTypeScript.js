var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Whatever = /** @class */ (function () {
    function Whatever() {
        this.sideEffect = "ugly effect";
    }
    Whatever.prototype.Whatever = function (someStuff) {
    };
    return Whatever;
}());
function addBR(someStr) {
    return someStr + "<br />";
}
// var myName : string = "Big Brother";
// var myAge : number = 41;
// var canVote : boolean = true;
// var someshit: any = "ugly code";
//who wants some FP?
var myName = "Big Brother";
var myAge = 41;
var canVote = true;
var someShit = "ugly code";
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
var strToNum = parseInt("5");
var numToStr = 5;
document.write("numToStr is a " + typeof (numToStr) + "<br />");
document.write("numToStr is a " + typeof (numToStr.toString()) + "<br />");
//hi im immutable
var PI = 3.14159;
var superman = {
    realName: 'Clark Kent',
    superName: "Superman"
};
//superman = {}; gets u undefined in each field
document.write(superman.realName + " is " +
    superman.superName + "<br />");
var employees = ["Bob", "Sally", "Sam"];
employees.push(5 + "");
document.write(addBR(employees.toString()));
var newEmployees = employees.map(function (member) {
    return member + " eats curry";
});
document.write(addBR(newEmployees.toString()));
document.write(addBR(employees.map(function (member, index) {
    return member + " is at index No. " + index;
}).toString()));
var superHeroes = [];
superHeroes.push({
    realName: 'Bruce Wayne',
    superName: "Batman"
});
superHeroes.push(superman);
//make some fucking side effect in forEach
superHeroes.forEach(function (hero) {
    document.write(addBR(hero.realName +
        " is " + hero.superName));
});
document.write(addBR("5 + 4 = " + (5 + 4)));
var num = 1;
//num++ will be first written and then incremented
//++num will be first incremented and then written
//num-- will be first written and then decremented
//--num will be first decremented and then written
document.write(addBR("num++ = " + num++)); //2
document.write(addBR("++num = " + ++num)); //3
document.write(addBR("num-- = " + num--)); //2
document.write(addBR("--num = " + --num)); //1
//difference between let and var
var sampLet = 123;
if (true) {
    var sampLet_1 = 456; //both let and const are block-scoped and behave more strictly
}
document.write(addBR(sampLet));
var sampVar = 123;
if (true) {
    var sampVar = 456; //var is not block-scoped
}
document.write(addBR(sampVar));
var randArray = [5, 6, 7, 8];
for (var val in randArray) {
    document.write(addBR(val));
}
var mapping = Array.prototype.map; //Using map generically
var strArray = mapping.call(randArray, function (member) {
    return member.toString();
}); //or simply strArray = randArray.map(String);
for (var _i = 0, strArray_1 = strArray; _i < strArray_1.length; _i++) {
    val = strArray_1[_i];
    document.write(addBR(val));
}
//almost the same as Scala's function signature
var getSum = function (num1, num2) {
    return num1 + num2;
};
var theSum1 = getSum(5, 2);
document.write(addBR("5 + 2 = " + theSum1));
var getDifference = function (num1, num2, num3) {
    if (num2 === void 0) { num2 = 2; }
    if (typeof num3 !== 'undefined') {
        return num1 - num2 - num3;
    }
    return num1 - num2;
};
document.write(addBR("5 - 2 = "
    + getDifference(5)));
document.write(addBR("5 - 2 - 3 = "
    + getDifference(5, 2, 3)));
var sumAll = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    return nums.reduce(function (a, b) {
        return a + b;
    }, 0);
};
document.write(addBR(sumAll(1, 2, 3, 4, 5)));
var factorial = function (num, factorialSoFar) {
    if (factorialSoFar === void 0) { factorialSoFar = 1; }
    if (num === 0) {
        return factorialSoFar;
    }
    return factorial(num - 1, num * factorialSoFar);
};
document.write(addBR(factorial(15)));
//assigning an anonymous function to a variable has
//no difference from declaring an explicit function tho
//hence this one is explicitly declared
function fibonacci(num, fibSoFar) {
    if (fibSoFar === void 0) { fibSoFar = 0; }
    if (num === 0) {
        return fibSoFar;
    }
    return fibonacci(num - 1, num + fibSoFar);
}
document.write(addBR(fibonacci(5)));
//fancy way to write anonymous functions using lambda
//trying to pretend this is functional
//Scala people and F# people gonna be grumpy for this
var doStuff = function (x) {
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
var Hero = /** @class */ (function () {
    //parameters marked by private will be automatically
    //initialized as fields by the constructor
    //using the value passed in
    function Hero(gender, realName, superName, isRich) {
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
    Hero.prototype.Hero = function (gender) {
        this.gender = gender;
    };
    Hero.prototype.getGender = function () {
        return this.gender;
    };
    Object.defineProperty(Hero.prototype, "weakness", {
        //different way to define getters
        get: function () {
            return this._weakness;
        },
        //different way to define setters
        //A set method cannot have a return type annotation
        set: function (weakness) {
            this._weakness = weakness;
        },
        enumerable: true,
        configurable: true
    });
    // public says() {
    //     return this.isRich ?
    //         "I'm rich" : "I can fly";
    // }
    // ternary works though compiler will complain
    // bout the type mismatch on the override method
    Hero.prototype.says = function () {
        var word;
        if (this.isRich) {
            word = "I'm rich";
        }
        else {
            word = "I can fly";
        }
        return word;
    };
    Hero.WhatsTheUniverse = function () {
        return Hero.universe;
    };
    return Hero;
}());
var clark = new Hero("male", "Clark Kent", "Superman", false);
var bruce = new Hero("male", "Bruce Wayne", "Batman", true);
var diana = new Hero("male", "Diana Prince", "Wonder Woman", false);
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
var Villain = /** @class */ (function (_super) {
    __extends(Villain, _super);
    function Villain(gender, realName, superName, isRich) {
        var _this = _super.call(this, gender, realName, superName, isRich) || this;
        Hero.universe = 52;
        return _this;
    }
    Villain.prototype.says = function () {
        return "I'm the bad guy";
    };
    return Villain;
}(Hero));
var joker = new Villain("male", "unknown", "Joker", true);
document.write(addBR(joker.realName + " is "
    + joker.superName + " and he says "
    + joker.says()));
document.write(addBR("Does Joker have field" +
    " 'isRich' : " + ('isRich' in joker)));
document.write(addBR("Is Joker a Hero: "
    + (joker instanceof Hero)));
document.write(addBR("Is Joker a Villain: "
    + (joker instanceof Villain)));
var Car = /** @class */ (function () {
    function Car(wheels) {
        this.wheels = wheels;
    }
    Car.prototype.drive = function () {
        return "I have " + this.wheels + " wheels";
    };
    return Car;
}());
var Bike = /** @class */ (function () {
    function Bike(wheels) {
        this.wheels = wheels;
    }
    Bike.prototype.drive = function () {
        return "I have " + this.wheels + " wheels";
    };
    return Bike;
}());
var car = new Car(4);
var bike = new Bike(2);
document.write(addBR("car says : " +
    car.drive() + " and bike says : " +
    bike.drive()));
function GetWheels(veh) {
    return veh.drive();
}
document.write(addBR(GetWheels(car)));
document.write(addBR(GetWheels(bike)));
var GenericAddableStuff = /** @class */ (function () {
    function GenericAddableStuff() {
    }
    return GenericAddableStuff;
}());
var aNumber = new GenericAddableStuff();
aNumber.add = function (x, y) { return x + y; };
document.write(addBR("5 + 4 = "
    + aNumber.add(5, 4)));
var aString = new GenericAddableStuff();
aString.add = function (x, y) { return String(Number(x) + Number(y)); };
document.write(addBR("5 + 6 = "
    + aString.add("5", "6")));
//destruction syntax
var randVals = { x: 1, y: 2, z: 3 };
var x = randVals.x, y = randVals.y, z = randVals.z;
document.write(addBR(x + y + z));
//load them in an array
//and then flip the array
_a = [z, y, x], x = _a[0], y = _a[1], z = _a[2];
document.write(addBR("Switch : " +
    (String(x) + String(y) + String(z))
        .split('').join(' ')));
//back quote
var multStr = "I go on for \nmany lines <br />\nmany many lines <br />\n<br />";
document.write(multStr);
document.write("<b>" + multStr + "</b>");
//spread operator example
function theSum(x, y, z) {
    document.write("Sum : " +
        (x + y + z) + "<br />");
}
var args = [4, 5, 6];
//theSum(...args); //spread operator, works but complaints from the compiler
var Emotion;
(function (Emotion) {
    Emotion[Emotion["Happy"] = 1] = "Happy";
    Emotion[Emotion["Sad"] = 2] = "Sad";
    Emotion[Emotion["Angry"] = 3] = "Angry";
})(Emotion || (Emotion = {}));
var myFeeling = Emotion.Sad;
//is equivalent to
myFeeling = 2;
//Functors
var nums = [1, 2, 3, 4, 5];
//this is an example of map implementation
//it is not the one from libraries
//fn the function, xs the functor (array in this case)
var map = function (fn) { return function (xs) { return xs.reduce(function (accumulate, val) { return accumulate.concat([fn(val)]); }, []); }; }; //[] the initial value for reduce
var explicitTypedMap = function (fn) { return function (xs) { return xs.reduce(function (accumulate, val) { return accumulate.concat([fn(val)]); }, []); }; }; //[] the initial value for reduce
var typeSafeMap = function (fn) {
    return function (xs) { return xs.reduce(function (accumulate, val) { return accumulate.concat([fn(val)]); }, []); };
};
var encapsulatedTypeMap = function (fn) {
    return function (xs) { return xs.reduce(function (accumulate, val) { return accumulate.concat([fn(val)]); }, []); };
};
var add1 = function (x) { return x + 1; };
var add2 = function (x) { return x + 2; };
var pure1 = function (x) { return [x]; };
//curring
var result1 = map(add1)(nums);
var result12 = explicitTypedMap(add1)(nums);
var result13 = typeSafeMap(add2)(nums);
var result14 = encapsulatedTypeMap(add2)(nums);
document.write(addBR(result1));
document.write(addBR(result12));
document.write(addBR(result13));
document.write(addBR(result14));
//Applicative Functors
var addTogether = function (x) { return function (y) { return x + y; }; };
//partially applied addTogether
//resulting [(y => 1 + y), (y => 2 + y)]
var applicativeFunctor = [1, 2].map(addTogether);
//appMap :: f ( a -> b ) -> f a -> f b
//applicative map for Applicative Functors
//xs the array containing partially applied addTogether Functions
//ys the Functor (a numeric array in this case)
//val the elements from the first param xs, individual partially applied Function in this case
//not type-safe
var appMap = function (xs) { return function (ys) {
    return ys.map(function (y) {
        return xs.reduce(function (acc, val) {
            return acc.concat([val(y)]);
        }, []); //initial value for reduce, empty array in this case, as we are building it up
    });
}; };
//for example, we can add two Functors together
//here we are adding [1,2] and [1,2,3,4,5]
//to map a Functor over another Functor
//we use Applicative Functor
//there are built-in implementations I believe
var result = appMap(applicativeFunctor)([1, 2, 3, 4, 5]);
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
var pure = function (x) { return { first: x }; };
//monadMap :: M a -> (a -> M b) -> M b
//In fact there are already implementations available in libraries, for example, flatMap
var monadMap = function (Ma) { return function (fn) { return fn(Ma['first']); }; };
var times10 = function (x) { return pure(x * 10); };
var firstMonadResult = monadMap(pure(10))(times10);
var secondMonadResult = monadMap(firstMonadResult)(times10);
document.write(addBR(firstMonadResult));
document.write(addBR(secondMonadResult));
document.write(addBR(firstMonadResult['first']));
document.write(addBR(secondMonadResult['first']));
// (trivial) TypeScript version of
// Option Monad in F# (equivalent to
// Maybe Monad in Haskell)
//Option :: Some | None
//Some X
var identity = function (x) {
    return {
        state: true,
        value: x
    };
};
//Option :: Some | None
//None
var none = function (_) {
    return {
        state: false,
        value: 'None'
    };
};
//bind :: M a -> (a -> M b) -> M b
var bind = function (Ma) { return function (fn) {
    return Ma['state'] ?
        fn(Ma['value']) : none(Ma['value']);
}; };
var add42 = function (x) { return identity(x + 42); };
var maybe1 = bind(identity(10))(add42);
var maybe2 = bind(none(maybe1))(add42);
var maybe3 = bind(maybe2)(add42);
var maybe4 = bind(maybe1)(add42);
document.write(addBR(maybe1['value']));
document.write(addBR(maybe2['value']));
document.write(addBR(maybe3['value']));
document.write(addBR(maybe4['value']));
var _a;
