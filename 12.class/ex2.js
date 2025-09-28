//with class
var User = /** @class */ (function () {
    function User(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    User.prototype.greet = function () {
        return "hello ".concat(this.firstName, " ").concat(this.lastName);
    };
    User.prototype.getAge = function () {
        return "".concat(this.age);
    };
    return User;
}());
//creatng instance or object
var user3 = new User("john", "doe", 34);
var user4 = new User("jame", "smith", 54);
console.log(user3.greet());
