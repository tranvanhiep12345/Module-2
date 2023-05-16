let object1 = {
    Name: "Hiep",
    Age: 22,
    Year: 2001
}
let object2 = {
    Name: "Tiep",
    Age: 24
}
let object3 = {...object1, ...object2}
console.log(object3)