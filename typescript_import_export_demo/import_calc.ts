import {Calc, SuperCalc} from "./export_calc";

let myCalc = new Calc(2, 3);
let mySuperCalc = new SuperCalc(3, 4);

console.log(myCalc.addUp());
console.log(mySuperCalc.pythagoras(2));