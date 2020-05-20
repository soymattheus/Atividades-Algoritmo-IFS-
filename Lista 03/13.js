/*13. Escreva um algoritmo que leia 3 números inteiros e mostre o maior deles.*/
const prompt = require('prompt-sync')();

var a = parseFloat(prompt('Digite o valor de A: '));
var b = parseFloat(prompt('Digite o valor de B: '));
var c = parseFloat(prompt('Digite o valor de C: '));

if (Number.isInteger(a) && Number.isInteger(b) && Number.isInteger(c)){
    if (a>b && a>c) {
        console.log(a + ' é o maior!');
    } else if (b>c) {
        console.log(b + ' é o maior!');
    } else {
        console.log(c + ' é o maior!');
    }
} else {
    console.log('Algum dado é inválido!');
}