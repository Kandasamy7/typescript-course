//without closure

let counterValue = 0;

function increment(){
    counterValue++;
}

function getCounterValue(){
    return counterValue
}

increment()
console.log(getCounterValue());

increment()
console.log(getCounterValue());

increment()

increment()
console.log(getCounterValue());
