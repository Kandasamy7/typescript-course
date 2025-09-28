//without class
var user1 = {
    firstName: "john",
    lastName: "doe",
    age: 25
};
var user2 = {
    firstName: "jame",
    lastName: "smith",
    age: 23
};
function greetUser(user) {
    return "Hello ".concat(user.firstName, " ").concat(user.lastName);
}
function getUserAge(user) {
    return user.age;
}
console.log(greetUser(user1));
