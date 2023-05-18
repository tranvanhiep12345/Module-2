class CountObject{
    public name: string;
    static count:number = 0;
    constructor(name: string) {
        this.name = name;
        CountObject.count++;
    }
}
console.log(CountObject.count)
let app1 = new CountObject('Hiep')
console.log(CountObject.count)
let app2 = new CountObject('David')
console.log(CountObject.count)