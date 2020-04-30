/*20)Entrar com dois números e imprimi-los em ordem decrescente (suponha
números diferentes).*/
const prompt = require('prompt-sync')();
var num1 = parseFloat(prompt('Informe o primeiro número: '));
var num2 = parseFloat(prompt('Informe o segundo número: '));
if (num1 < num2) {
    console.log(num2 + ' , ' + num1);
} else {
    console.log(num1 + ' , ' + num2);
}