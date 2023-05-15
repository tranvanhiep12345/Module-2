let object = [
    {type:   "machine", value: 5000},
    {type:   "machine", value:  650},
    {type:      "duck", value:   10},
    {type: "furniture", value: 1200},
    {type:   "machine", value:   77}
]
let sum = 0
let totalValue = arr => {
    for (let i=0; i < arr.length; i++) {
        if (arr[i].type === "machine") {
            sum += arr[i].value
        }
    }
    return sum
}
console.log(totalValue(object))

// let sum = object.reduce((total,arr)=>{
//     if (arr.type === "machine"){
//         return total + arr.value
//     }
//     return total
// },0)
// console.log(sum)
