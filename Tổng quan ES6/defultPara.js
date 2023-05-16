// let product = (a,b) => a*b
// console.log(product(4,5))

class Product {
    constructor(a,b=10) {
        console.log(a*b)
    }
}
let product = new Product(4,6)
console.log(product)

let product1 = new Product(4)
console.log(product1)