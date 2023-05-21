import {Shape} from "./lopShape";
export class Rectangle extends Shape{
    constructor(color: string,
                filled: boolean,
                private width: number,
                private length: number) {
        super(color,filled);
        this.width = width;
        this.length = length;
    }

    getwidth(): number {
        return this.width;
    }

    setwidth(value: number) {
        this.width = value;
    }

    getlength(): number {
        return this.length;
    }

    setlength(value: number) {
        this.length = value;
    }
    getArea(){
        return this.width * this.length
    }
    getPerimeter(){
        return 2 * (this.width + this.length)
    }
    toString(){
        return `A Rectangle with ${this.getwidth()} and ${this.getlength()}, which is a subclass of ${super.toString()}`
    }
}
let rectangle = new Rectangle("orange", true, 2.5, 3.8);
console.log(rectangle);
console.log(rectangle.getArea());
console.log(rectangle.getPerimeter());
console.log(rectangle.toString());