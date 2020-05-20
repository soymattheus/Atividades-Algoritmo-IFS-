/*10. Elaborar um algoritmo que lê 3 valores a,b,c e os escreve. A seguir, encontre
o maior dos 3 valores e o escreva com a mensagem : "É o maior ".*/
const prompt = require('prompt-sync')();

var a = parseFloat(prompt('Digite o valor de A: '));
var b = parseFloat(prompt('Digite o valor de B: '));
var c = parseFloat(prompt('Digite o valor de C: '));

if (a>b && a>c) {
    console.log(a + ' é o maior!');
} else if (b>c) {
    console.log(b + ' é o maior!');
} else {
    console.log(c + ' é o maior!');
}