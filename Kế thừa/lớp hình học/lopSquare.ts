import {Rectangle} from "./lopRectangle";
class Square extends Rectangle{
    constructor(color: string,
                filled: boolean,
                side: number) {
        super(color, filled, side, side);
    }
    getSide(){
        return this.getwidth()
    }
    setSide(value: number): void{
        this.setwidth(value)
        this.setlength(value)
    }
    setwidth(value: number){
        this.setSide(value)
    }
    setlength(value: number) {
        this.setlength(value)
    }
    toString(){
        return `A Square with ${this.getSide()}, which is a subclass of ${super.toString()}`
    }
}
let square = new Square( "yellow", true,5.8);
console.log(square);
console.log(square.toString());