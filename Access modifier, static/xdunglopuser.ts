class User{
    protected name: string;
    protected email: string;
    private role: number;

    constructor(name: string, email: string, role: number) {
        this.name = name;
        this.email = email;
        this.role = role;
    }
    getInfo(){
        return `Name: ${this.name} - Email: ${this.email}`
    }
    isAdmin(){
        if(this.role === 1){
            return `Day la admin`
        } else if(this.role ===2){
            return `Day la nguoi dung binh thuong`
        }
    }
    setName(name:string){
        this.name = name
    }
    setRole(value: number) {
        this.role = value;
    }
    setEmail(email: string){
        this.email = email
    }
}
let user1 = new User('Hiep','vanhiep2001@gmail.com',1)
let user2 = new User('HiepT','duyhieu2016@gmail.com',2)
console.log(user2.getInfo())
user2.isAdmin()
user1.setEmail('hieuct.work@gmail.com')
console.log(user1.getInfo())
user1.isAdmin()