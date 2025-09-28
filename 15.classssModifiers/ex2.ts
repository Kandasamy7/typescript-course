class User1{
    private name: string;
    private age: number

    constructor(name: string, age: number){
        this.age = age,
        this.name = name
    }
     getName(){
        return this.name
    }
     public getAge(){
        return this.age
    }
    public setName(name:string){
        this.name = name;  
    }
    public setAge(age:number){
        if (age > 0) {
            this.age = age;
        }
    }
}

const user2 = new User1("alice", 50)
console.log(user2.getName());
console.log(user2.getAge());
user2.setAge(40);
console.log(user2.getAge());


