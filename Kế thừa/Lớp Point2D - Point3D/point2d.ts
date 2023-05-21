export class Point2D {
    constructor(private x: number,
                private y: number) {
        this.x = x
        this.y = y
    }

    getX(): number {
        return this.x;
    }

    setX(value: number) {
        this.x = value;
    }

    getY(): number {
        return this.y;
    }

    setY(value: number) {
        this.y = value;
    }
    getXY(): object{
        return {x: this.getX(), y: this.getY()}
    }
    setXY(x: number, y: number): void{
        this.x = x
        this.y = y
    }
}