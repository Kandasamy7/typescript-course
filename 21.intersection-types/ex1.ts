interface emplyee{
    name: string;
    id: number
}

interface Admin{
    isAdmin: boolean
    accessLevel: number
}
type AdminEmployee = emplyee & Admin

let adminemp : AdminEmployee = {
    id:123,
    name: "alice",
    isAdmin: true,
    accessLevel:340
}

console.log(adminemp.name);
console.log(adminemp.id);
console.log(adminemp.isAdmin);
console.log(adminemp.accessLevel);



