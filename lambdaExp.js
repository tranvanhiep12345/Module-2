function squareNumber(functionSq,arr){
    let newArr = []
    arr.forEach((index) =>{
        newArr.push(functionSq(index))
    })
    return newArr
}
let function1 = element => element ** 2
console.log(squareNumber(function1,[1,2,3,4,5,6,7,8]))