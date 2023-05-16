var Employee = /** @class */ (function () {
    function Employee(name, gender, dob, email, phone) {
        this.name = name;
        this.gender = gender;
        this.dob = dob;
        this.email = email;
        this.phone = phone;
    }
    return Employee;
}());
var employ1 = new Employee('David', 'Nam', '02-04-1997', 'david@gmail.com', '092378126');
var employ2 = new Employee('Myra', 'Nu', '06-08-1999', 'myra@gmail.com', '092235234');
var employ3 = new Employee('Eddie', 'Nu', '07-09-1995', 'eddie@gmail.com', '092384897');
var employ4 = new Employee('Hiep', 'Nam', '09-09-2001', 'hiep@gmail.com', '091246831');
var arr = [employ1, employ2, employ3, employ4];
console.table(arr);
