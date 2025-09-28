class user4{
    name : string
    static totalUsers: number = 0;
    constructor(name: string){
        this.name = name
        user4.totalUsers++
    }

    getName(){
        return this.name;
    }
    static getTotalUsers(){
        return user4.totalUsers;
    }
}
// let totalUsers = 0;

// function createUser(name: string){
//     totalUsers++ //tight coupling
//     return new user4(name);
// }

const user1 = new user4('Alice')
// const user2 = createUser("bob")

console.log(user1.getName());
// console.log(user2.getName());
console.log(user4.getTotalUsers());


