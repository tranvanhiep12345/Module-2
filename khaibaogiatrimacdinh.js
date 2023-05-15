function lastIndexOf(arr,elt,start = 6){
    for(let i = start -1; i >= 0; i--){
        if (arr[i] = elt) {
            return i
        } else {
            return -1
        }
    }
}

console.log(lastIndexOf([1,2,3,2,5,2,7,8],2 ))