class QuadraticEquation{
    a: number;
    b: number;
    c: number;

    constructor(a: number, b: number, c: number) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    getDiscriminant(){
        let delta = this.b * 2 - 4 * this.a * this.c
        return delta
    }
    getRoot(){
        let index = this.getDiscriminant()
        if(index > 0){
            return `Ph.trinh co 2 nghiem la: ${(- this.b + Math.sqrt(index))/(2 * this.a)} va ${(- this.b - Math.sqrt(index))/(2 * this.a)}`
        } else if(index == 0){
            return `Phuong trinh co 1 nghiem kep la: ${(- this.b/(2 * this.a))}`
        } else {
            return `Phuong trinh vo nghiem`
        }
    }
}
let equa = new QuadraticEquation(1,2,1)
console.log(equa.getRoot())