class Product{
    nameProduct: string;
    price: number;

    constructor(nameProduct: string, price: number) {
        this.nameProduct = nameProduct;
        this.price = price;
    }
}

class ProductManage{
    products: Product[] = []
    constructor() {
    }
    getAll(){
        return this.products
    }
    add(product: Product){
        this.products.push(product)
    }
}
let laptop = new Product("Laptop", 20000);
let iphone = new Product("Iphone", 10000);
let productManage = new ProductManage()
productManage.add(laptop)
productManage.add(iphone)
console.log(productManage.getAll())