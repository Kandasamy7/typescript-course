//without inheritance
var User = /** @class */ (function () {
    function User(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    User.prototype.greet = function () {
        return "hello ".concat(this.firstName, " ").concat(this.lastName);
    };
    User.prototype.greetAge = function () {
        return this.age;
    };
    return User;
}());
var Admin = /** @class */ (function () {
    function Admin(firstName, lastName, age, role) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.role = role;
    }
    Admin.prototype.greet = function () {
        return "hello ".concat(this.firstName, " ").concat(this.lastName, ", role ").concat(this.role);
    };
    Admin.prototype.greetAge = function () {
        return this.age;
    };
    Admin.prototype.manageUser = function () {
        return "managing users with roles ".concat(this.role);
    };
    return Admin;
}());
var user5 = new User("john", "j0o", 35);
var user4 = new Admin("sef", "seew", 65, "hr");
console.log(user5.greet());
console.log(user4.greet());
console.log(user4.manageUser());
