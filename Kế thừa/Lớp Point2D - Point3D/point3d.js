"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point3d = void 0;
var point2d_1 = require("./point2d");
var Point3d = /** @class */ (function (_super) {
    __extends(Point3d, _super);
    function Point3d(x, y, z) {
        var _this = _super.call(this, x, y) || this;
        _this.z = z;
        _this.z = z;
        return _this;
    }
    Point3d.prototype.getZ = function () {
        return this.z;
    };
    Point3d.prototype.setZ = function (value) {
        this.z = value;
    };
    Point3d.prototype.getXYZ = function () {
        return { x: _super.prototype.getX.call(this), y: _super.prototype.getY.call(this), z: this.getZ() };
    };
    Point3d.prototype.setXYZ = function (x, y, z) {
        _super.prototype.setXY.call(this, x, y);
        this.z = z;
    };
    return Point3d;
}(point2d_1.Point2D));
exports.Point3d = Point3d;
