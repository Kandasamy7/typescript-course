class user3{
    name: string
    age: number

    constructor(name: string, age : number){
        this.age = age;
        this.name = name
    }
    static isAdult(age :number){
        return age >= 18
    }
}

// const uer = new user3("alice", 50)
// console.log(uer.isAdult());

console.log(user3.isAdult(40));
