class Circle{
    public radius: number;
    constructor(radius: number) {
        this.radius = radius
    }
}
function distanceCircle(circle1:Circle, circle2:Circle, d:number): number{
    let distances = Math.pow(circle1.radius - circle2.radius,2) + Math.pow(d,2)
    return Math.sqrt(distances)
}
let circleOne = new Circle(9)
let circleTwo = new Circle(5)
console.log(distanceCircle(circleOne,circleTwo,24))