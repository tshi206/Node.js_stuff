export class Calc {
    constructor(protected x: number, protected y: number){}
    addUp() : number{
        return this.x + this.y;
    }
}

export class SuperCalc extends Calc{

    constructor(x : number, y : number){
        super(x, y);
    }

    pythagoras(z : number){
        return Math.sqrt(Math.pow(this.x, z) + Math.pow(this.y, z));
    }
}