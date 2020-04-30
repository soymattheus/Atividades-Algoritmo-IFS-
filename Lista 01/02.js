/*2)Construir um programa que leia dois valores numéricos e efetue a adição,
caso o resultado seja maior que 10
apresentá-lo.*/

const prompt = require('prompt-sync')();
var num1 = +(prompt('Informe o primeiro número: '));
var num2 = +(prompt('Informe o segundo número: '));

console.log(num1 + num2);

if (num1 + num2 > 10) {
    console.log('Resultado: ' + (num1 + num2));
} else {
    console.log('O resultado não é maior que 10');
}