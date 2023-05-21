import {Shape} from "./lopShape"
let shape = new Shape("red", false)
class Circle extends Shape{
    constructor(color: string,
                filled: boolean,
                private radius: number) {
        super(color,filled);
        this.radius = radius;
    }
    getRadius(): number{
        return this.radius;
    }

    setRadius(value: number) {
        this.radius = value;
    }
    getArea(){
        return this.radius * this.radius * Math.PI
    }
    getPerimeter(){
        return 2 * this.radius * Math.PI
    }
    toString(){
        return (`A Circle with ${this.getRadius()}, which is a subclass of ${super.toString()}`)
    }
}