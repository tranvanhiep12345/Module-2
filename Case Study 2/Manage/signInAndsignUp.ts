let readLineSync = require('readline-sync')
export class User{
    constructor(private username: string,
                private password: string,
                private accountBalance: number) {
        this.username = username
        this.password = password
        this.accountBalance = accountBalance
    }

    getUsername(): string {
        return this.username;
    }

    setUsername(value: string) {
        this.username = value;
    }

    getPassword(): string {
        return this.password;
    }

    setPassword(value: string) {
        this.password = value;
    }

    getAccountBalance(): number {
        return this.accountBalance;
    }

    setAccountBalance(value: number) {
        this.accountBalance = value;
    }
}

export class ManageUser{
    constructor(private listUser: User[] = []) {
        this.listUser.push(new User('hiep123','12345',400000))
        this.listUser.push(new User('hiep','88888888',500000))
    }

    getListUser(): User[] {
        return this.listUser;
    }

    setListUser(value: User[]) {
        this.listUser = value;
    }

    addUser(value: User){
        let item = false
        this.listUser.map(index =>{
            if (index.getUsername() === value.getUsername()){
                item = true
                console.log('Tên tài khoản đã tồn tại. Hãy nhập lại tên tài khoản mới')
                value.setUsername(readLineSync.question('Nhap tai khoan moi: '))
                value.setPassword(readLineSync.question('Nhap mat khau moi: '))
                this.addUser(value)
            }
        })
        if(!item){
            this.getListUser().push(value)
        }
    }
    findUser(value: User){
        this.getListUser().map(index =>{
            if(index.getUsername() === value.getUsername() &&
               index.getPassword() === value.getPassword()){
                index.setAccountBalance(index.getAccountBalance() + value.getAccountBalance())
                return index
            }
        })
    }
    addMoneyToAccount(acount: string, value: number){
        let item = false
        this.getListUser().map(index =>{
            if(index.getUsername() === acount){
                item = true
                index.setAccountBalance(index.getAccountBalance() + value)
            }
        })
        if(!item){
            console.log('Không tìm thấy tài khoản nào !!!')
        }
    }

    displayInformation(value: string){
        this.getListUser().map(index =>{
            if(index.getUsername() === value){
                console.table(index)
            }
        })
    }

    displayForStore(){
        console.table(this.getListUser())
    }
}
