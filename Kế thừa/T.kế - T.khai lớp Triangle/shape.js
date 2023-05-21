"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
var Shape = /** @class */ (function () {
    function Shape(name, color) {
        this.name = name;
        this.color = color;
        this.name = name;
        this.color = color;
    }
    Shape.prototype.getName = function () {
        return this.name;
    };
    Shape.prototype.setName = function (value) {
        this.name = value;
    };
    Shape.prototype.getColor = function () {
        return this.color;
    };
    Shape.prototype.setColor = function (value) {
        this.color = value;
    };
    return Shape;
}());
exports.Shape = Shape;
