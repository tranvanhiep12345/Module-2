"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shape_1 = require("./shape");
var triangle_1 = require("./triangle");
var shape = new shape_1.Shape('tam giac', 'vang');
var triangle = new triangle_1.Triangle('tam giac', 'do', 8, 9, 10);
console.log(shape);
console.log(triangle.getPerimeter());
console.log(triangle.getArea());
