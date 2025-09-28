var user4 = /** @class */ (function () {
    function user4(name) {
        this.name = name;
    }
    user4.prototype.getName = function () {
        return this.name;
    };
    return user4;
}());
var totalUsers = 0;
function createUser(name) {
    totalUsers++;
    return new user4(name);
}
var user1 = createUser("alice");
var user2 = createUser("bob");
console.log(user1.getName());
console.log(user2.getName());
console.log(totalUsers);
