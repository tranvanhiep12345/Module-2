var Circle = /** @class */ (function () {
    function Circle(radius, color) {
        this.radius = radius;
        this.color = color;
    }
    return Circle;
}());
var listCircle = [];
listCircle.push(new Circle(5, 'yellow'));
listCircle.push(new Circle(10, 'red'));
listCircle.push(new Circle(15, 'blue'));
console.table(listCircle);
