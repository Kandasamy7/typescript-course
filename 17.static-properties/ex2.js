var user4 = /** @class */ (function () {
    function user4(name) {
        this.name = name;
        user4.totalUsers++;
    }
    user4.prototype.getName = function () {
        return this.name;
    };
    user4.getTotalUsers = function () {
        return user4.totalUsers;
    };
    user4.totalUsers = 0;
    return user4;
}());
// let totalUsers = 0;
// function createUser(name: string){
//     totalUsers++ //tight coupling
//     return new user4(name);
// }
var user1 = new user4('Alice');
// const user2 = createUser("bob")
console.log(user1.getName());
// console.log(user2.getName());
console.log(user4.getTotalUsers());
