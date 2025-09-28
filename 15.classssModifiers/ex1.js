//without class modifiers
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    return User;
}());
var user = new User("alice", 40);
console.log(user.name);
console.log(user.age);
