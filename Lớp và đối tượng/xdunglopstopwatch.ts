class StopWatch{
    private startTime;
    private endTime ;

    constructor() {
        this.startTime = new Date()
    }
    getter(){
        return `Start time: ${this.startTime} - End time: ${this.endTime} `
    }
    start(){
        this.startTime = new Date()
    }
    end(){
        this.endTime = new Date()
    }
    getElapsedTime() {
        return this.endTime.getTime() - this.startTime.getTime()
    }
}
function selectionSort(arr) {
    let currentValueNewIndex;
    for (let i = 0; i < arr.length; i++) {
        currentValueNewIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[currentValueNewIndex] > arr[j]) {
                currentValueNewIndex = j;
            }
        }
        if (i !== currentValueNewIndex) {
            let temp = arr[i];
            arr[i] = arr[currentValueNewIndex];
            arr[currentValueNewIndex] = temp;
        }
    }

    return arr;
}
const arr = [];
for (let i=0; i<100000; i++) {
    arr.push(Math.floor(Math.random() * 100000 + 1));
}
console.log(selectionSort(arr));
