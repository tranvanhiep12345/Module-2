import {Point2D} from "./point2d";
export class Point3d extends Point2D{
    constructor(x: number,
                y: number,
                private z: number) {
        super(x, y);
        this.z = z;
    }
    getZ(): number {
        return this.z;
    }
    setZ(value: number) {
        this.z = value;
    }
    getXYZ(): object{
        return {x: super.getX(), y: super.getY(), z: this.getZ()}
    }
    setXYZ(x: number, y: number, z: number){
        super.setXY(x,y)
        this.z = z
    }
}