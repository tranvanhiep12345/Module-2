var Product = /** @class */ (function () {
    function Product(nameProduct, price) {
        this.nameProduct = nameProduct;
        this.price = price;
    }
    return Product;
}());
var ProductManage = /** @class */ (function () {
    function ProductManage() {
        this.products = [];
    }
    ProductManage.prototype.getAll = function () {
        return this.products;
    };
    ProductManage.prototype.add = function (product) {
        this.products.push(product);
    };
    return ProductManage;
}());
var laptop = new Product("Laptop", 20000);
var iphone = new Product("Iphone", 10000);
var productManage = new ProductManage();
productManage.add(laptop);
productManage.add(iphone);
console.log(productManage.getAll());
