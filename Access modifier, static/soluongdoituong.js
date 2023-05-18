var CountObject = /** @class */ (function () {
    function CountObject(name) {
        this.name = name;
        CountObject.count++;
    }
    CountObject.count = 0;
    return CountObject;
}());
console.log(CountObject.count);
var app1 = new CountObject('Hiep');
console.log(CountObject.count);
var app2 = new CountObject('David');
console.log(CountObject.count);
