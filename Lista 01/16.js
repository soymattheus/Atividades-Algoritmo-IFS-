/*16) Faça um programa que leia 2 números e imprima uma mensagem dizendo
se são iguais ou diferentes.*/
const prompt = require('prompt-sync')();
var num1 = parseFloat(prompt('Informe o primeiro número: '));
var num2 = parseFloat(prompt('Informe o segundo número: '));
if (num1 == num2) {
    console.log('Os números são iguais!');
} else {
    console.log('Os números são diferentes!');
}