"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Calc {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    addUp() {
        return this.x + this.y;
    }
}
exports.Calc = Calc;
class SuperCalc extends Calc {
    constructor(x, y) {
        super(x, y);
    }
    pythagoras(z) {
        return Math.sqrt(Math.pow(this.x, z) + Math.pow(this.y, z));
    }
}
exports.SuperCalc = SuperCalc;
//# sourceMappingURL=export_calc.js.map