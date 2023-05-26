function fibonaci(n){
    if(n <= 0){
        return `Nhap lai`
    } else if(n == 1){
        return 0
    }else if (n ==2){
        return 1
    } else {
        return fibonaci(n-1) + fibonaci(n-2)
    }
}

console.log(fibonaci(10))