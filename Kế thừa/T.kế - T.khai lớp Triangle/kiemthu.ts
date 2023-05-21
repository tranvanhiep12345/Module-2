import {Shape} from "./shape";
import {Triangle} from "./triangle";
let shape: Shape = new Shape('tam giac','vang')
let triangle: Triangle = new Triangle('tam giac','do',8,9,10)
console.log(shape)
console.log(triangle.getPerimeter())
console.log(triangle.getArea())