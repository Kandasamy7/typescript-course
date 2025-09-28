interface User {
    firstName:string,
    lastName:string,
    age?:number,
    middleName?:string
}

function greetUser(user : User) {
    return `Hello ${user.firstName} ${user.lastName}`
}

function logUserDetails(user : User) {
    console.log(`User : ${user.firstName} ${user.middleName} ${user.lastName} , Age: ${user.age}`);
    
}

let user1 = {
    firstName:"john",
    lastName :"doe",
    middleName:"durairaj",
    age: 7
}
let user2 = {
    firstName:"john",
    lastName :"doe",
}

console.log(greetUser(user1));
logUserDetails(user2)
