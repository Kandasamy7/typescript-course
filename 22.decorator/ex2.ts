function logMethod(target : any,  propertyKey: string, descriptor : PropertyDescriptor){
    const orginalMethod = descriptor.value

    descriptor.value = function(...args: any[]){
        console.log(`calling ${propertyKey} method with arguments ${args.join(',')}`);
        const res = orginalMethod.apply(this, args)
        console.log(`result : ${res}`);
        return res;
    }
}
class Calculator{
    @logMethod
    add(a:number, b:number){
        const res = a + b;
        return res;
    }
    @logMethod
    sub(a:number, b:number){
        const res = a - b;
        return res;
    }
}
const calci = new Calculator()
calci.add(5, 4)
calci.sub(7, 2)

//tsc ex2.ts -experimentalDecorators --target es5