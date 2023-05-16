var speed;
(function (speed) {
    speed[speed["SLOW"] = 1] = "SLOW";
    speed[speed["MEDIUM"] = 2] = "MEDIUM";
    speed[speed["FAST"] = 3] = "FAST";
})(speed || (speed = {}));
var Fan = /** @class */ (function () {
    function Fan(speed, on, radius, color) {
        this.speed = speed.SLOW;
        this.on = false;
        this.radius = 5;
        this.color = 'blue';
    }
    Fan.prototype.getStatus = function (fan) {
        if (this.on) {
            console.log("".concat(fan, " is on"));
        }
        else {
            console.log("".concat(fan, " is off"));
        }
    };
    Fan.prototype.setSpeed = function (speedF) {
        this.speed = speedF;
    };
    Fan.prototype.setOn = function (booleanF) {
        this.on = booleanF;
    };
    Fan.prototype.setRadius = function (radiusF) {
        this.radius = radiusF;
    };
    Fan.prototype.setColor = function (colorF) {
        this.color = colorF;
    };
    return Fan;
}());
var fan1 = new Fan(speed.FAST, true, 10, 'yellow');
var fan2 = new Fan(speed.MEDIUM, false, 5, 'blue');
console.log(fan1);
fan1.getStatus('fan1');
console.log(fan2);
fan2.getStatus('fan2');
