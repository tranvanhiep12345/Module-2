class Students{
    name: string;
    age: number;
    point: number;

    constructor(name: string, age: number, point: number) {
        this.name = name;
        this.age = age;
        this.point = point;
    }
}
function displayStudent(student: Students){
    console.table(student)
}
let arr : Students[] = []
arr.push(new Students('David', 25, 9))
arr.push(new Students('Myra', 23, 8))
arr.push(new Students('Hiep', 22, 10))
arr.map(index => {
    displayStudent(index)
})

console.log(`Sau khi thêm phần tử`)
function addStudent(student: Students){
    arr.push(student)
}
let student1 = new Students('Nam',25,7)
let student2 = new Students('Han',24,9)
addStudent(student1)
addStudent(student2)
arr.map(index => {
    displayStudent(index)
})

console.log('Sau khi xóa 1 phần tử')
function deleteStudent(indexSTD: Students){
    arr = arr.filter((item,index)=> index ==2)
    // arr.splice(indexSTD, 1)
}
deleteStudent(2)
arr.map(index => {
    displayStudent(index)
})



