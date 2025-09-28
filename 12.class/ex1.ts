//without class
let user1 = {
    firstName:"john",
    lastName:"doe",
    age:25
}
let user2 = {
    firstName:"jame",
    lastName:"smith",
    age:23
}
function greetUser(user: {firstName : string, lastName : string}){
    return `Hello ${user.firstName} ${user.lastName}`
}

function getUserAge(user: {age: number}){
    return user.age
}
console.log(greetUser(user1));
console.log(getUserAge(user2));

