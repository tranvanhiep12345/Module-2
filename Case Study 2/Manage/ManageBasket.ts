import {ProductInBasket} from "../user/basket";
export class ManageBasket{
    constructor(private listBasket: ProductInBasket[] = []) {
        this.listBasket.push(new ProductInBasket(1,'mi tom',30,7000))
        this.listBasket.push(new ProductInBasket(2,'kem',10,10000))
        this.listBasket.push(new ProductInBasket(3,'xa phong',10,21000))
    }

    getListBasket(): ProductInBasket[] {
        return this.listBasket;
    }

    setListBasket(value: ProductInBasket[]) {
        this.listBasket = value;
    }

    displayBasket(): void{
        console.table(this.getListBasket())
    }

    addToBasket(value: ProductInBasket){
        let item = false
        this.getListBasket().map(index =>{
            if(index.getIdProduct() === value.getIdProduct() &&
               index.getNameProduct() === value.getNameProduct() &&
               index.getPriceOfProduct() === value.getPriceOfProduct()){
                    index.setAmountYourProduct(index.getAmountYourProduct() + value.getAmountYourProduct())
                    item = true
            }
        })
        if(!item){
            this.getListBasket().push(value)
        }
        console.log('THÊM VÀO GIỎ HÀNG THÀNH CÔNG !!!')
    }

    payTheBill(value: ProductInBasket): number{
        return value.getPriceOfProduct() * value.getAmountYourProduct()
    }
}