import {Circle} from "./circle";
class Cylinder extends Circle{
    constructor(radius: number,
                color: string,
                private height: number) {
        super(radius, color);
        this.height = height;
    }
    getHeight(){
        return this.height
    }
    setHeight(value:number){
        this.height = value
    }
    getVolume(){
        return super.getArea() * this.getHeight()
    }
}
