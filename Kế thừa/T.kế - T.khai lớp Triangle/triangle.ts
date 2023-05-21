import {Shape} from "./shape";
export class Triangle extends Shape{
    constructor(name: string,
                color: string,
                private side1: number,
                private side2: number,
                private side3: number) {
        super(name,color)
        this.side1 = side1
        this.side2 = side2
        this.side3 = side3
    }
    getSide1(): number {
        return this.side1;
    }
    setSide1(value: number) {
        this.side1 = value;
    }
    getSide2(): number {
        return this.side2;
    }
    setSide2(value: number) {
        this.side2 = value;
    }
    getSide3(): number {
        return this.side3;
    }
    setSide3(value: number) {
        this.side3 = value;
    }
    getPerimeter(){
        return this.getSide1() + this.getSide2() + this.getSide3()
    }
    getArea(): number{
        let index = this.getPerimeter()/2
        return Math.sqrt(index * (index - this.getSide1()) * (index - this.getSide2()) * (index - this.getSide3()))
    }
}