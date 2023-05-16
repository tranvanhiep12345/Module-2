class Readbook{
    title: string;
    author: string;
    alreadyRead: boolean;

    constructor(title: string, author: string, alreadyRead: boolean) {
        this.title = title;
        this.author = author;
        this.alreadyRead = alreadyRead;
    }
}
let book1 = new Readbook('The Design of EveryDay Things','Don Norman', false)
let book2 = new Readbook('The Most Human Human','Brian Christian', true)
let book3 = new Readbook('The Men','Hiep', true)
let arr: Readbook[] = [book1,book2,book3]
for(let i in arr){
    let book = arr[i]
    let bookInfo = `${book.title} của tác giả ${book.author}`
    if(book.alreadyRead){
        console.log(`Bạn chưa đọc ${bookInfo} `)
    } else {
        console.log(`Bạn đang đọc ${bookInfo}`)
    }
}