enum speed{
    SLOW = 1,
    MEDIUM,
    FAST
}
class Fan{
    private speed: number;
    private on: boolean;
    private radius: number;
    private color: string;
    constructor(speed,on,radius,color) {
        this.speed = speed.SLOW;
        this.on = false;
        this.radius = 5;
        this.color = 'blue'
    }
    getStatus(fan:string){
        if(this.on){
            console.log(`${fan} is on`)
        }else {
            console.log(`${fan} is off`)
        }
    }
    setSpeed(speedF:number){
        this.speed = speedF
    }
    setOn(booleanF:boolean){
        this.on = booleanF
    }
    setRadius(radiusF:number){
        this.radius = radiusF
    }
    setColor(colorF:string){
        this.color = colorF
    }
}
let fan1 = new Fan(speed.FAST,true,10,'yellow')
let fan2 = new Fan(speed.MEDIUM,false,5,'blue')
console.log(fan1);
fan1.getStatus('fan1');
console.log(fan2);
fan2.getStatus('fan2');
