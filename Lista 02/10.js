/*10) Calcular o MDC de dois números inteiros usando o método de Euclides.*/
const prompt = require('prompt-sync')();

var num1 = parseFloat(prompt('Digite o primeiro número: '));
var num2 = parseFloat(prompt('Digite o segundo número: '));
var mdc = 0;
var x = 0;
while (1) {
    if (num1%num2 == 0) {
        break;
    } else {
        x = num1%num2;
        num1 = num2;
        num2 = x;
        if (num1%num2 > 0) {
            mdc = (num1%num2);
        }
    }
} 
console.log('MDC: ' + mdc);