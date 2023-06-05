import {StockRoom} from "./stockroom";
export class Store extends StockRoom{

    constructor(idProduct: number,
                nameProduct: string,
                wholesalePrice: number,
                amountProduct: number,
                private retailPrice: number) {
        super(idProduct, nameProduct, wholesalePrice, amountProduct)
        this.retailPrice = retailPrice
    }

    getRetailPrice(): number {
        return this.retailPrice;
    }

    setRetailPrice(value: number) {
        this.retailPrice = value;
    }
}