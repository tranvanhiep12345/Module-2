var Distance = /** @class */ (function () {
    function Distance(xA, yA, xB, yB) {
        this.xA = xA;
        this.yA = yA;
        this.xB = xB;
        this.yB = yB;
    }
    Distance.prototype.disAtoB = function () {
        return "Khoang cach giua 2 diem A va B la ".concat(Math.sqrt(Math.pow(this.xA - this.xB, 2) + Math.pow(this.yA - this.yB, 2)));
    };
    return Distance;
}());
var distance1 = new Distance(1, 2, 3, 4);
console.log(distance1.disAtoB());
