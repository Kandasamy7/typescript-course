interface User{
    name: string
    age: number;
}

const jsonData = `{
    "name": "alice",
    "age": 30
}`;

const user = JSON.parse(jsonData) as User

console.log(`name : ${user.name} , age : ${user.age} , email : ${user.email}`);
