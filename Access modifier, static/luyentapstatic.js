var _a;
var _this = this;
var Practice = /** @class */ (function () {
    function Practice() {
    }
    Practice.displayObject = function () {
        return "Ten: ".concat(Practice.nameObject, " - Tuoi: ").concat(Practice.age, " - Id: ").concat(Practice.id);
    };
    return Practice;
}());
_a = Practice;
// constructor(name: string, age: number, id: number) {
//     this.name = name;
//     this.age = age;
//     this.id = id;
// }
(function () {
    _a.nameObject = 'Hiep';
    _a.age = 22;
    _a.id = 235353;
})();
console.log(Practice.displayObject());
