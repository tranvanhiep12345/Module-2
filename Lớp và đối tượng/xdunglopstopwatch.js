var StopWatch = /** @class */ (function () {
    function StopWatch() {
        this.startTime = new Date();
    }
    StopWatch.prototype.getter = function () {
        return "Start time: ".concat(this.startTime, " - End time: ").concat(this.endTime, " ");
    };
    StopWatch.prototype.start = function () {
        this.startTime = new Date();
    };
    StopWatch.prototype.end = function () {
        this.endTime = new Date();
    };
    StopWatch.prototype.getElapsedTime = function () {
        return this.endTime.getTime() - this.startTime.getTime();
    };
    return StopWatch;
}());
function selectionSort(arr) {
    var currentValueNewIndex;
    for (var i = 0; i < arr.length; i++) {
        currentValueNewIndex = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[currentValueNewIndex] > arr[j]) {
                currentValueNewIndex = j;
            }
        }
        if (i !== currentValueNewIndex) {
            var temp = arr[i];
            arr[i] = arr[currentValueNewIndex];
            arr[currentValueNewIndex] = temp;
        }
    }
    return arr;
}
var arr = [];
for (var i = 0; i < 100000; i++) {
    arr.push(Math.floor(Math.random() * 100000 + 1));
}
console.log(selectionSort(arr));
