const calculator = {
    plus: function(a, b) {
        return a+b;
    },
    minus: function(a, b) {
        return a-b;
    },
    times: function(a, b) {
        return a*b;
    },
    divide: function(a, b) {
        return a/b;
    },
    power: function(a, b) {
        return a**b;
    },
}

const plusRes = calculator.plus(3, 2);
const minusRes = calculator.minus(plusRes, 3);
const timesRes = calculator.times(minusRes, 5);
const divideRes = calculator.divide(timesRes, minusRes);
const powerRes = calculator.power(divideRes, 2);

console.log(plusRes, minusRes, timesRes, divideRes, powerRes);