class Employee{
    name: string;
    gender: string;
    dob: string;
    email: string;
    phone: string;

    constructor(name: string, gender: string, dob: string, email: string, phone: string) {
        this.name = name;
        this.gender = gender;
        this.dob = dob;
        this.email = email;
        this.phone = phone;
    }
}

let employ1 = new Employee('David','Nam','02-04-1997','david@gmail.com','092378126')
let employ2 = new Employee('Myra','Nu','06-08-1999','myra@gmail.com','092235234')
let employ3 = new Employee('Eddie','Nu','07-09-1995','eddie@gmail.com','092384897')
let employ4 = new Employee('Hiep', 'Nam', '09-09-2001','hiep@gmail.com','091246831')
let arr: Employee[] = [employ1, employ2, employ3, employ4]
console.table(arr)

