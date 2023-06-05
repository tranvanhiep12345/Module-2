import {ManageStockRoom} from "./Manage/ManageStockRoom";
import {StockRoom} from "./user/stockroom";
import {ManageStore} from "./Manage/ManageStore";
import {Store} from "./user/store";
import {ManageBasket} from "./Manage/ManageBasket";
import {ProductInBasket} from "./user/basket";
import {Menu} from "./menu";
import {User} from "./Manage/signInAndsignUp";
import {ManageUser} from "./Manage/signInAndsignUp";


let input = require('readline-sync')
let stockRoom = new ManageStockRoom([])
let store = new ManageStore([])
let basket = new ManageBasket([])
let manageUser = new ManageUser([])

let choice: number = -1
let start: boolean = true
while(start){
    Menu.login()
    choice = +input.question('Chon tac vu ban muon thuc hien: ')
    switch(choice){
        case 1:
            console.log('Nhập thông tin đăng nhập ')
            let user = new User(input.question('Nhap tai khoan: '),
                                input.question('Nhap mat khau: '),
                                +input.question('Nhap so tien muon nap: '))
            manageUser.findUser(user)
            if(user == undefined){
                console.log('Thông tin đăng nhập sai')
                Menu.separates()
                choice = 1
            } else {
                Menu.separates()
                let choiceToRun: number
                let pennant: boolean = true
                while(pennant){
                    Menu.menu()
                    choiceToRun = +input.question('Nhap tac vu muon thuc hien: ')
                    switch (choiceToRun) {
                        case 1:
                            let count: number = +input.question('Nhap so loai hang hoa muon nhap ve kho: ')
                            for (let i = 0; i < count; i++) {
                                let product = new StockRoom(+input.question('Nhap id cua hang hoa: '),
                                                            input.question('Nhap ten hang hoa: '),
                                                            +input.question('Nhap gia si cua hang hoa: '),
                                                            +input.question('Nhap so luong cua hang hoa nhap vao: '))
                                stockRoom.importProduct(product)
                            }
                            Menu.separates()
                            break
                        case 2:
                            let value: number = +input.question('Nhap id hang hoa muon xoa: ')
                            stockRoom.deleteProduct(value)
                            Menu.separates()
                            break
                        case 3:
                            stockRoom.findProduct(+input.question('Nhap id hang hoa muon tim: '))
                            Menu.separates()
                            break
                        case 4:
                            stockRoom.displayStockRoom()
                            Menu.separates()
                            break
                        case 5:
                            store.displayStore()
                            Menu.separates()
                            break
                        case 6:
                            let amount: number = +input.question('Nhap so luong hang hoa muon nhap: ')
                            for(let i = 0; i < amount; i++){
                                let productInStore = new Store(+input.question('Nhap id cua san pham muon nhap: '),
                                                                input.question('Nhap ten cua san pham muon nhap: '),
                                                                +input.question('Nhap gia nhap san pham tu kho: '),
                                                                +input.question('Nhap so luong san pham muon nhap: '),
                                                                +input.question('Nhap gia ban san pham: '))
                                store.addProductinStore(productInStore)
                                stockRoom.updateStockRoom(productInStore.getIdProduct(),
                                                          productInStore.getNameProduct(),
                                                          productInStore.getAmountProduct())
                                stockRoom.addProductToListSold(productInStore.getIdProduct(),
                                                                productInStore.getNameProduct(),
                                                                productInStore.getAmountProduct())
                            }
                            Menu.separates()
                            break
                        case 7:
                            store.findProductInStore(+input.question('Nhap id hang hoa muon tim: '))
                            Menu.separates()
                            break
                        case 8:
                            basket.displayBasket()
                            Menu.separates()
                            break
                        case 9:
                            let countYourProduct: number = +input.question('Nhap so luong hang hoa muon mua: ')
                            for (let i = 0; i < countYourProduct; i++) {
                                let productInBasket = new ProductInBasket(+input.question('Nhap id cua san pham muon them vao gio hang: '),
                                                                            input.question('Nhap ten cua san pham muon them vao gio hang: '),
                                                                            +input.question('Nhap so luong san pham muon them vao gio hang: '),
                                                                            +input.question('Nhap gia ban san pham: '))
                                basket.addToBasket(productInBasket)
                            }
                            Menu.separates()
                            break
                        case 10:
                            let bill: number = 0
                            basket.getListBasket().map(index =>{
                                bill += basket.payTheBill(index)
                            })
                            console.log(`Tổng số tiền bạn cần phải thanh toán là ${bill}`)
                            Menu.separates()
                            break
                        case 11:
                            manageUser.addMoneyToAccount(user.getUsername(),user.getAccountBalance())
                            Menu.separates()
                            break
                        case 12:
                            if(user.getAccountBalance() >= bill){
                                basket.getListBasket().map(index => {
                                    store.updateProductInStore(index.getIdProduct(),
                                                               index.getNameProduct(),
                                                               index.getAmountYourProduct())
                                    store.addToListSoldStore(index.getIdProduct(),
                                                             index.getNameProduct(),
                                                             index.getAmountYourProduct())
                                })
                                user.setAccountBalance(user.getAccountBalance() - bill)
                                basket.setListBasket([])
                                console.log('Bạn đã thanh toán thành công đơn hàng !!!')
                            }else{
                                console.log('Số tiền trong tài khoản bạn không đủ. Hãy nạp thêm tiền vào tài khoản !!!')
                            }
                            Menu.separates()
                            break
                        case 13:
                            stockRoom.revenueStockRoom()
                            Menu.separates()
                            break
                        case 14:
                            store.revenueStore()
                            Menu.separates()
                            break
                        case 15:
                            store.profitStore()
                            Menu.separates()
                            break
                        case 16:
                            manageUser.displayInformation(user.getUsername())
                            Menu.separates()
                            break
                        case 17:
                            let passwordStore = input.question('Nhap mat khau cua cua hang: ')
                            if(passwordStore === 'shopcuahiep'){
                                manageUser.displayForStore()
                            } else {
                                console.log('NHẬP SAI MẬT KHẨU !!!')
                            }
                            Menu.separates()
                            break
                        case 18:
                            pennant = false
                            Menu.separates()
                            break
                    }
                }
            }
            Menu.separates()
            break
        case 2:
            manageUser.addUser(new User(input.question('Nhap tai khoan moi: '),
                                        input.question('Nhap mat khau moi: '),
                                        +input.question('Nhap so tien muon nap: ')))
            Menu.separates()
            break
        case 3:
            start = false
            Menu.separates()
            break
    }
}
