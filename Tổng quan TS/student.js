var Students = /** @class */ (function () {
    function Students(name, age, point) {
        this.name = name;
        this.age = age;
        this.point = point;
    }
    return Students;
}());
function displayStudent(student) {
    console.table(student);
}
var arr = [];
arr.push(new Students('David', 25, 9));
arr.push(new Students('Myra', 23, 8));
arr.push(new Students('Hiep', 22, 10));
arr.map(function (index) {
    displayStudent(index);
});
console.log("Sau khi th\u00EAm ph\u1EA7n t\u1EED");
function addStudent(student) {
    arr.push(student);
}
var student1 = new Students('Nam', 25, 7);
var student2 = new Students('Han', 24, 9);
addStudent(student1);
addStudent(student2);
arr.map(function (index) {
    displayStudent(index);
});
// function deleteStudent(index: Students){
//     arr.splice(index,1)
//     return arr
// }
// deleteStudent()
