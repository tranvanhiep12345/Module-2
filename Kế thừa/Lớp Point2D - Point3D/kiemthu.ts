import {Point2D} from "./point2d";
import {Point3d} from "./point3d";
let point2D: Point2D = new Point2D(3,3);
let point3D: Point3d = new Point3d(2,2,2);
console.log(point2D)
console.log(point3D);
console.log(point3D.getXYZ());
point3D.setXYZ(1,2,3);
console.log(point3D);