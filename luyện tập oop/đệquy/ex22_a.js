function appearances(k,arr){
    if(arr.length === 0){
        return 0
    }else if(arr[0] === k){
        return 1 + appearances(k,arr.slice(1))
    } else{
        return appearances(k,arr.slice(1))
    }
}
let array = [1,2,3,4,5,6,7,8,9,6,4,7,4,6,8]
console.log(appearances(4,array))