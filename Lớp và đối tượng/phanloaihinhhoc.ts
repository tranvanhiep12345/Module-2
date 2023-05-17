class Shape{
    color: string;
    filled: boolean;

    constructor(color: string, filled: boolean) {
        this.color = color;
        this.filled = filled;
    }
}
let shape = new Shape('Yellow',false)

class Circle{
    color: string;
    filled: boolean;
    radius: number;

    constructor(color: string, filled: boolean, radius: number) {
        this.color = color;
        this.filled = filled;
        this.radius = radius;
    }
    getArea(){
        return Math.PI * this.radius ** 2
    }
    getPerimeter(){
        return 2 * this.radius * Math.PI
    }
}
let circle = new Circle('yellow',true,8)
console.log(circle.getArea())
console.log(circle.getPerimeter())

class Rectangle{
    color: string;
    filled: boolean;
    width:number;
    height: number;

    constructor(color: string, filled: boolean, width: number, height: number) {
        this.color = color;
        this.filled = filled;
        this.width = width;
        this.height = height;
    }
    getArea(){
        return this.width * this.height
    }
    getPerimeter(){
        return (this.width + this.height) * 2
    }
}
let rectangle = new Rectangle('red', true,3,4)
console.log(rectangle.getArea())
console.log(rectangle.getPerimeter())

class Square{
    color: string;
    filled: boolean;
    side: number;

    constructor(color: string, filled: boolean, side: number) {
        this.color = color;
        this.filled = filled;
        this.side = side;
    }
    getAreaSquare(){
        return this.side ** 2
    }
}
let square = new Square('blue',true,9)
console.log(square.getAreaSquare())