/*1) Receber um número do usuário e mostrar se esse número é par ou não par*/
const prompt = require('prompt-sync')();

var num = parseFloat(prompt('Digite o número: '));
if (Number.isInteger(num)) {
    if (num%2 == 0) {
        console.log('PAR!');
    } else {
        console.log('ÍMPAR!');
    }
} else {
    console.log('Dado inválido!');
}