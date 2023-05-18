var User = /** @class */ (function () {
    function User(name, email, role) {
        this.name = name;
        this.email = email;
        this.role = role;
    }
    User.prototype.getInfo = function () {
        return "Name: ".concat(this.name, " - Email: ").concat(this.email);
    };
    User.prototype.isAdmin = function () {
        if (this.role === 1) {
            return "Day la admin";
        }
        else if (this.role === 2) {
            return "Day la nguoi dung binh thuong";
        }
    };
    User.prototype.setName = function (name) {
        this.name = name;
    };
    User.prototype.setRole = function (value) {
        this.role = value;
    };
    User.prototype.setEmail = function (email) {
        this.email = email;
    };
    return User;
}());
var user1 = new User('Hiep', 'vanhiep2001@gmail.com', 1);
var user2 = new User('HiepT', 'duyhieu2016@gmail.com', 2);
console.log(user2.getInfo());
user2.isAdmin();
user1.setEmail('hieuct.work@gmail.com');
console.log(user1.getInfo());
user1.isAdmin();
