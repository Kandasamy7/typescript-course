var jsonData = "{\n    \"name\": \"alice\",\n    \"age\": 30\n}";
var user = JSON.parse(jsonData);
console.log("name : ".concat(user.name, " , age : ").concat(user.age, " , email : ").concat(user.email));
