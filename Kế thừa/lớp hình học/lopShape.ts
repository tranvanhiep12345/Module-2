export class Shape{
    constructor(private color: string = 'green',
                private filled: boolean = true) {
        this.color = color;
        this.filled = filled
    }

    getcolor(): string {
        return this.color;
    }

    setcolor(value: string) {
        this.color = value;
    }

    getfilled(): boolean {
        return this.filled;
    }

    setfilled(value: boolean) {
        this.filled = value;
    }
    toString(){
        return (this.getfilled() ? `A Shape with ${this.color} and filled` : `A Shape with ${this.color} and not filled`)
    }
}
