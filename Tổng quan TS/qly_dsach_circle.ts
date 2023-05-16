class Circle{
    radius: number;
    color: string;

    constructor(radius: number, color: string) {
        this.radius = radius;
        this.color = color;
    }
}
let listCircle: Circle[] = []
listCircle.push(new Circle(5,'yellow'))
listCircle.push(new Circle(10,'red'))
listCircle.push(new Circle(15,'blue'))
console.table(listCircle)