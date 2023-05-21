export class Circle{
    constructor(private radius: number,
                private color: string) {
        this.radius = radius
        this.color = color
    }

    getRadius(): number {
        return this.radius;
    }

    setRadius(value: number) {
        this.radius = value;
    }

    getColor(): string {
        return this.color;
    }

    setColor(value: string) {
        this.color = value;
    }
    getArea(){
        return Math.PI * this.getRadius()**2
    }
    getPerimeter(){
        return Math.PI * 2 * this.getRadius()
    }
}