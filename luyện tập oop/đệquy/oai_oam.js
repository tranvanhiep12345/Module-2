
// function count(arr1, element) {
//     let count = 0;
//     arr1.map(index => {
//         if (index === element) count++
//     })
//     return count;
// }
// function averange(arr){
//     arr.sort((a,b) => a-b)
//     let array = arr.filter((element, index) => arr.indexOf(element) === index)
//     array.map(index =>{
//         console.log(`${index} : ${(count(arr,index) * 100)/arr.length}`)
//     })
// }
// averange([1,2,2,3,3,3,4,4,5,5,6,6,6])

function sum(arr){
    let map = new Map()
    arr.map(index =>{
        (!map.has(index)) ? map.set(index, 1) : map.set(index, map.get(index) + 1)
    })
    for(let [key, value] of map){
        const percentage = (value * 100) / arr.length;
        console.log(`${key} : ${percentage}%`)
    }

}
sum([1,2,2,3,3,3,4,4,5,5,6,6,6])

