var User1 = /** @class */ (function () {
    function User1(name, age) {
        this.age = age,
            this.name = name;
    }
    User1.prototype.getName = function () {
        return this.name;
    };
    User1.prototype.getAge = function () {
        return this.age;
    };
    User1.prototype.setName = function (name) {
        this.name = name;
    };
    User1.prototype.setAge = function (age) {
        this.age = age;
    };
    return User1;
}());
var user2 = new User1("alice", 50);
console.log(user2.getName());
console.log(user2.getAge());
user2.setAge(30);
console.log(user2.getAge());
