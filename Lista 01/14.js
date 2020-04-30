/*14) Entrar com dois números e exibir se o primeiro é divisível pelo segundo.*/
const prompt = require('prompt-sync')();
var num1 = parseFloat(prompt('Informe o primeiro número: '));
var num2 = parseFloat(prompt('Informe o segundo número: '));
if (Number.isInteger(num1/num2)) {
    console.log(num1 + ' é divisível por ' + num2);
} else {
    console.log(num1 + ' não é divisível por ' + num2);
}