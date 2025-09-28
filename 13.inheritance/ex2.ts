//with inheritance
class person{
    firstName : string;
    lastName : string;
    age: number


    constructor(firstName : string, lastName:string,age :number, ){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age

    }

    greet(){
        return `hello ${this.firstName} ${this.lastName},`
    }
    greetAge(){
        return this.age
    }
}
class user extends person{
     constructor(firstName : string, lastName:string,age :number,){
        super(firstName,lastName,age)
    }
}
class Admin extends person{
    role:string
     constructor(firstName : string, lastName:string,age :number, role : string){
        super(firstName,lastName,age)
        this.role = role
    }
    greet(): string {
         return `hello ${this.firstName} ${this.lastName}, role ${this.role}`
    }
     manageUser() {
        return `managing users with roles ${this.role}`
    }
}
let user5 = new user("john","j0o",35)
let user4 = new Admin("sef","seew",65,"hr")

console.log(user5.greet());
console.log(user4.greet());
console.log(user4.manageUser());