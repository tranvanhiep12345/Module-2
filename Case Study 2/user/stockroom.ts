import {Product} from "./product";
export class StockRoom extends Product{

    constructor(idProduct: number,
                nameProduct: string,
                private wholesalePrice: number,
                private amountProduct: number) {
        super(idProduct, nameProduct)
        this.wholesalePrice = wholesalePrice
        this.amountProduct = amountProduct
    }

    getWholesalePrice(): number {
        return this.wholesalePrice
    }

    setWholesalePrice(value: number) {
        this.wholesalePrice = value
    }

    getAmountProduct(): number {
        return this.amountProduct
    }

    setAmountProduct(value: number) {
        this.amountProduct = value
    }
}