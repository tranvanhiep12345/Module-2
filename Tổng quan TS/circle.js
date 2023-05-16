var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    return Circle;
}());
function distanceCircle(circle1, circle2, d) {
    var distances = Math.pow(circle1.radius - circle2.radius, 2) + Math.pow(d, 2);
    return Math.sqrt(distances);
}
var circleOne = new Circle(9);
var circleTwo = new Circle(5);
console.log(distanceCircle(circleOne, circleTwo, 24));
