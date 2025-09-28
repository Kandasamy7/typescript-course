var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (a, b) {
        console.log("calling add method with arguments ".concat(a, " and ").concat(b));
        var res = a + b;
        console.log("result: ".concat(res));
        return res;
    };
    Calculator.prototype.sub = function (a, b) {
        console.log("calling sub method with arguments ".concat(a, " and ").concat(b));
        var res = a - b;
        console.log("result: ".concat(res));
        return res;
    };
    return Calculator;
}());
var calci = new Calculator();
calci.add(5, 4);
calci.sub(7, 2);
