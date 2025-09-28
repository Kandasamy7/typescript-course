function greetUser(user) {
    return "Hello ".concat(user.firstName, " ").concat(user.lastName);
}
function logUserDetails(user) {
    console.log("User : ".concat(user.firstName, " ").concat(user.middleName, " ").concat(user.lastName, " , Age: ").concat(user.age));
}
var user1 = {
    firstName: "john",
    lastName: "doe",
    middleName: "durairaj",
    age: 7
};
console.log(greetUser(user1));
logUserDetails(user1);
