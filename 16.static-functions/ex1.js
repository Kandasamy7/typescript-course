var user3 = /** @class */ (function () {
    function user3(name, age) {
        this.age = age;
        this.name = name;
    }
    user3.prototype.isAdult = function () {
        return this.age >= 18;
    };
    return user3;
}());
var uer = new user3("alice", 50);
console.log(uer.isAdult());
