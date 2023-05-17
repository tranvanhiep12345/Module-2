class Distance{
    xA: number;
    yA: number;
    xB: number;
    yB: number;

    constructor(xA: number, yA: number, xB: number, yB: number) {
        this.xA = xA;
        this.yA = yA;
        this.xB = xB;
        this.yB = yB;
    }
    disAtoB(){
        return `Khoang cach giua 2 diem A va B la ${Math.sqrt(Math.pow(this.xA - this.xB,2) + Math.pow(this.yA - this.yB,2))}`
    }
}
let distance1 = new Distance(1,2,3,4)
console.log(distance1.disAtoB())