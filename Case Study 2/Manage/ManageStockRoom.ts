import {StockRoom} from "../user/stockroom";
let readLine = require('readline-sync')
export class ManageStockRoom{
    constructor(private quantityOfProduct: StockRoom[] = [],
                private listForSold: StockRoom[] = []) {
        this.quantityOfProduct.push(new StockRoom(1,'mi tom',2500,10000))
        this.quantityOfProduct.push(new StockRoom(2,'kem',4500,12000))
        this.quantityOfProduct.push(new StockRoom(3,'xa phong',15000,8000))
        this.listForSold = []
    }

    getQuantityOfProduct(): StockRoom[] {
        return this.quantityOfProduct;
    }

    setQuantityOfProduct(value: StockRoom[]) {
        this.quantityOfProduct = value;
    }

    getListForSold(): StockRoom[] {
        return this.listForSold;
    }

    setListForSold(value: StockRoom[]) {
        this.listForSold = value;
    }

    importProduct(value: StockRoom){
        let item = false
        this.getQuantityOfProduct().map(index => {
            if(index.getIdProduct() === value.getIdProduct() &&
                index.getNameProduct() === value.getNameProduct() &&
                index.getWholesalePrice() === value.getWholesalePrice()){
                index.setAmountProduct(index.getAmountProduct() + value.getAmountProduct())
            } else if(index.getIdProduct() === value.getIdProduct() &&
                      (index.getNameProduct() !== value.getNameProduct() ||
                          index.getWholesalePrice() !== value.getWholesalePrice() ||
                          index.getAmountProduct() !== value.getAmountProduct())){
                console.log('HÃY NHẬP LẠI SẢN PHẨM !!!')
                value.setIdProduct(+readLine.question('Nhap lai id san pham: '))
                value.setNameProduct(readLine.question('Nhap lai ten san pham: '))
                value.setWholesalePrice(+readLine.question('Nhap lai gia si cua san pham: '))
                value.setAmountProduct(+readLine.question('Nhap lai so luong san pham: '))
                this.importProduct(value)
            } else if(index.getIdProduct() !== value.getIdProduct()){
                item = true
            }
        })
        if(item){
            this.getQuantityOfProduct().push(value)
        }
    }

    deleteProduct(value: number){
        let item = false
        this.getQuantityOfProduct().map(index =>{
            if(index.getIdProduct() === value){
                item = true
            }
        })
        if(item){
            this.setQuantityOfProduct(this.getQuantityOfProduct().filter(index => index.getIdProduct() !== value))
        } else{
            console.log('KHÔNG TÌM THẤY SẢN PHẨM CẦN XÓA')
        }
    }
    findProduct(value: number){
        let item = false
        this.getQuantityOfProduct().map(index =>{
            if(index.getIdProduct() === value){
                item = true
                console.log(`ID: ${index.getIdProduct()} - TÊN SẢN PHẨM: ${index.getNameProduct()} - GIÁ SỈ: ${index.getWholesalePrice()} - SỐ LƯỢNG: ${index.getAmountProduct()}`)
            }
        })
        if(!item){
            console.log('KHÔNG TÌM THẤY SẢN PHẨM NÀY TRONG KHO')
        }
    }

    updateStockRoom(id: number, name: string, amount: number){
        let item = false
        this.getQuantityOfProduct().map(index =>{
            if(index.getIdProduct() === id &&
               index.getNameProduct() === name){
                item = true
                if(index.getAmountProduct() >= amount){
                    index.setAmountProduct(index.getAmountProduct() - amount)
                }else {
                    console.log('SẢN PHẨM NÀY HIỆN KHÔNG ĐỦ SỐ LƯỢNG ĐỂ BÁN')
                }
            }
        })
        if(!item){
            console.log('KHÔNG TÌM THẤY SẢN PHẨM !!!')
        }
    }

    displayStockRoom(){
        console.table(this.getQuantityOfProduct())
    }

    addProductToListSold(id: number, name: string, amount: number){
        let item = false
        this.getListForSold().map(index =>{
            if(index.getIdProduct() === id &&
               index.getNameProduct() === name){
                item = true
                index.setAmountProduct(index.getAmountProduct() + amount)
            }
        })
        let price: number = 0
        this.getQuantityOfProduct().map(index =>{
            if(index.getIdProduct() === id &&
               index.getNameProduct() === name){
                price = index.getWholesalePrice()
            }
        })
        if(!item){
            this.getListForSold().push(new StockRoom(id,name,price,amount))
        }
    }

    revenueStockRoom(){
        let sum = 0
        this.getListForSold().map(index =>{
            sum += index.getAmountProduct() * index.getWholesalePrice()
        })
        console.log(`Tổng doanh thu của Kho hàng là ${sum}`)
    }
}