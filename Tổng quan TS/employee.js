var Employee = /** @class */ (function () {
    function Employee(name, gender, dob) {
        this.name = name;
        this.gender = gender;
        this.dob = dob;
    }
    return Employee;
}());
function displayOne(employ) {
    // console.table(`Name: ${employ.name}, Gender: ${employ.gender}, Date of Birth:${employ.dob}`)
    console.table(employ);
}
displayOne(new Employee('Hiep', 'Nam', '09-09-2001'));
var arr = [];
arr.push(new Employee('David', 'Nam', '02-04-1997'));
arr.push(new Employee('Myra', 'Nu', '06-08-1999'));
arr.push(new Employee('Eddie', 'Nu', '07-09-1995'));
arr.map(function (index) {
    displayOne(index);
});
function addEmployee(employ) {
    arr.push(employ);
}
// function deleteEmployee(employ:Employee){
//     arr = arr.filter((item,index)=> index !== employ)
//     arr.splice(employ, 1)
// }
