var Readbook = /** @class */ (function () {
    function Readbook(title, author, alreadyRead) {
        this.title = title;
        this.author = author;
        this.alreadyRead = alreadyRead;
    }
    return Readbook;
}());
var book1 = new Readbook('The Design of EveryDay Things', 'Don Norman', false);
var book2 = new Readbook('The Most Human Human', 'Brian Christian', true);
var book3 = new Readbook('The Men', 'Hiep', true);
var arr = [book1, book2, book3];
for (var i in arr) {
    var book = arr[i];
    var bookInfo = "".concat(book.title, " c\u1EE7a t\u00E1c gi\u1EA3 ").concat(book.author);
    if (book.alreadyRead) {
        console.log("B\u1EA1n ch\u01B0a \u0111\u1ECDc ".concat(bookInfo, " "));
    }
    else {
        console.log("B\u1EA1n \u0111ang \u0111\u1ECDc ".concat(bookInfo));
    }
}
