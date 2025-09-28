class Calculator{
    add(a:number, b:number){
        console.log(`calling add method with arguments ${a} and ${b}`);
        const res = a + b;
        console.log(`result: ${res}`);
        return res;
    }
    sub(a:number, b:number){
        console.log(`calling sub method with arguments ${a} and ${b}`);
        const res = a - b;
        console.log(`result: ${res}`);
        return res;
    }
}
const calci = new Calculator()
calci.add(5, 4)
calci.sub(7, 2)
