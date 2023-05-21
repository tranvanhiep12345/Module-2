export class Shape{
   constructor(private name: string,
               private color: string) {
       this.name = name
       this.color = color
   }

    getName(): string {
        return this.name;
    }

    setName(value: string) {
        this.name = value;
    }

    getColor(): string {
        return this.color;
    }

    setColor(value: string) {
        this.color = value;
    }
}