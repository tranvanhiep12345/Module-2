export class Product{
    constructor(private idProduct: number,
                private nameProduct: string) {
        this.idProduct = idProduct
        this.nameProduct = nameProduct
    }

    getIdProduct(): number {
        return this.idProduct;
    }

    setIdProduct(value: number) {
        this.idProduct = value;
    }

    getNameProduct(): string {
        return this.nameProduct;
    }

    setNameProduct(value: string) {
        this.nameProduct = value;
    }
}