function createCounter(){
    let counter = 0;

    return {
        increment : function(){
            counter++;
        },
        getValue: function() {
            return counter
        }
    }
}
const counter1 = createCounter();
const counter2 = createCounter();
counter1.increment();
counter2.increment();
counter2.increment();
console.log(counter1.getValue());
console.log(counter2.getValue());
