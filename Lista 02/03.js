/*3) Receber 3 valores numéricos em 3 variáveis, A, B e C, e trocar os valores
entre as variáveis de forma que, ao final do algoritmo, a variável A possua o
menor valor e a variável C o maior.*/
const prompt = require('prompt-sync')();

var a = parseFloat(prompt('Digite o 1º número: '));
var b = parseFloat(prompt('Digite o 2º número: '));
var c = parseFloat(prompt('Digite o 3º número: '));
var aux = 0;
while (a > b || a > c) {
    if (a > b) {
        aux = b;
        b = a;
        a = aux;
    }
}

if (b > c) {
    aux = c;
    c = b;
    b = aux;
}

console.log('A: ' + a);
console.log('B: ' + b);
console.log('C: ' + c);