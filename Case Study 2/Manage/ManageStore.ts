import {Store} from "../user/store";
let readline = require('readline-sync')
export class ManageStore{
    constructor(private listProduct: Store[] = [],
                private listStoreSold: Store[] = []) {
        this.listProduct.push(new Store(1,'mi tom',4000,500,7000))
        this.listProduct.push(new Store(2,'kem',6000,500,10000))
        this.listProduct.push(new Store(3,'xa phong',17000,500,21000))
        this.listStoreSold = []
    }

    getListProduct(): Store[] {
        return this.listProduct;
    }

    setListProduct(value: Store[]) {
        this.listProduct = value;
    }

    getListStoreSold(): Store[] {
        return this.listStoreSold;
    }

    setListStoreSold(value: Store[]) {
        this.listStoreSold = value;
    }

    displayStore(){
        console.table(this.getListProduct())
    }

    addProductinStore(value: Store){
        let item = false
        this.getListProduct().map(index=>{
            if (index.getIdProduct() === value.getIdProduct() &&
                index.getNameProduct() === value.getNameProduct() &&
                index.getWholesalePrice() === value.getWholesalePrice() &&
                index.getRetailPrice() === value.getRetailPrice()){
                    index.setAmountProduct(index.getAmountProduct() + value.getAmountProduct())
            } else if(index.getIdProduct() === value.getIdProduct() &&
                     (index.getNameProduct() === value.getNameProduct() ||
                         index.getWholesalePrice() === value.getWholesalePrice() ||
                         index.getRetailPrice() === value.getRetailPrice() ||
                         index.getAmountProduct() === value.getAmountProduct())){
                console.log('HÃY NHẬP LẠI SẢN PHẨM !!!')
                value.setIdProduct(readline.question('Nhap lai id cua san pham: '))
                value.setNameProduct(readline.question('Nhap lai ten san pham: '))
                value.setWholesalePrice(readline.question('Nhap lai gia nhap san pham: '))
                value.setAmountProduct(readline.question('Nhap lai so luong san pham: '))
                value.setRetailPrice(readline.question('Nhap lai gia ban san pham: '))
                this.addProductinStore(value)
            } else if(index.getIdProduct() !== value.getIdProduct()){
                item = true
            }
        })
        if(item){
            this.getListProduct().push(value)
        }
    }

    findProductInStore(value: number){
        let item = false
        this.getListProduct().map(index =>{
            if(index.getIdProduct() === value){
                item = true
                console.log(`Id sản phẩm: ${index.getIdProduct()} - Tên sản phẩm: ${index.getNameProduct()} - Giá nhập sản phẩm: ${index.getWholesalePrice()} - Số lượng sản phẩm: ${index.getAmountProduct()} - Giá bán lẻ: ${index.getRetailPrice()}`)
                if(index.getAmountProduct() <= 10){
                    console.log('Số lượng sản phầm này rất thấp, HÃY NHẬP THÊM HÀNG ĐI !!!')
                }
            }
        })
        if(!item){
            console.log('Không tìm thấy sản phẩm nào !!!')
        }
    }

    updateProductInStore(id: number, name: string, amount: number){
        let item = false
        this.getListProduct().map(index =>{
            if(index.getIdProduct() === id &&
                index.getNameProduct() === name){
                    item = true
                if(index.getAmountProduct() >= amount){
                    index.setAmountProduct(index.getAmountProduct() - amount)
                }else {
                    console.log('Sản phẩm này không đủ số lượng để bạn lấy')
                }
            }
        })
        if(!item){
            console.log('Không tìm thấy sản phẩm cần mua !!!')
        }
    }
    addToListSoldStore(id: number, name: string, amount: number){
        let item: boolean = false
        this.getListStoreSold().map(index =>{
            if(index.getIdProduct() === id &&
               index.getNameProduct() === name){
                item = true
                index.setAmountProduct(index.getAmountProduct() + amount)
            }
        })
        let wholePrice: number = 0
        let retailPrice: number = 0
        this.getListProduct().map(index =>{
            if(index.getIdProduct() === id &&
               index.getNameProduct() === name){
                wholePrice = index.getWholesalePrice()
                retailPrice = index.getRetailPrice()
            }
        })
        if(!item){
            this.getListStoreSold().push(new Store(id,name,wholePrice,amount,retailPrice))
        }
    }

    revenueStore(){
        let sum = 0
        this.getListStoreSold().map(index =>{
            sum += index.getWholesalePrice() * index.getAmountProduct()
        })
        console.log(`Tổng doanh thu của cửa hàng là ${sum}`)
    }

    profitStore(){
        let sum = 0
        this.getListStoreSold().map(index =>{
            sum += (index.getRetailPrice() - index.getWholesalePrice()) * index.getAmountProduct()
        })
        console.log(`Tổng lợi nhuận của cửa hàng là ${sum}`)
    }
}