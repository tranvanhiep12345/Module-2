 import {Product} from "./product";
export class ProductInBasket extends Product{

    constructor(idProduct: number,
                nameProduct: string,
                private amountYourProduct: number,
                private priceOfProduct: number) {
        super(idProduct, nameProduct)
        this.amountYourProduct = amountYourProduct
        this.priceOfProduct = priceOfProduct
    }

    getAmountYourProduct(): number {
        return this.amountYourProduct;
    }

    setAmountYourProduct(value: number) {
        this.amountYourProduct = value;
    }

    getPriceOfProduct(): number {
        return this.priceOfProduct;
    }

    setPriceOfProduct(value: number) {
        this.priceOfProduct = value;
    }
}