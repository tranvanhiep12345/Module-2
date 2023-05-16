class Employee{
    name: string;
    gender: string;
    dob: string;

    constructor(name: string, gender: string, dob: string) {
        this.name = name;
        this.gender = gender;
        this.dob = dob;
    }
    // getName(): string {
    //     return this.name;
    // }
    //
    // setName(value: string) {
    //     this.name = value;
    // }
    //
    // getGender(): string {
    //     return this.gender;
    // }
    //
    // setGender(value: string) {
    //     this.gender = value;
    // }
    //
    // getDob(): string {
    //     return this.dob;
    // }
    //
    // set Dob(value: string) {
    //     this.dob = value;
    // }
}

function displayOne(employ:Employee){
    // console.table(`Name: ${employ.name}, Gender: ${employ.gender}, Date of Birth:${employ.dob}`)
    console.table(employ)
}
displayOne(new Employee('Hiep', 'Nam', '09-09-2001'))

let arr: Employee[] = []
arr.push(new Employee('David','Nam','02-04-1997'))
arr.push(new Employee('Myra','Nu','06-08-1999'))
arr.push(new Employee('Eddie','Nu','07-09-1995'))

arr.map(index =>{
    displayOne(index)
})

function addEmployee(employ:Employee){
    arr.push(employ)
}
// function deleteEmployee(employ:Employee){
//     arr = arr.filter((item,index)=> index !== employ)
//     arr.splice(employ, 1)
// }