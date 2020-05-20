/*2. Escreva um algoritmo que leia três números inteiros e positivos (A, B, C) e
calcule a seguinte expressão: 
    D = (R+S)/2
onde:
    R = (A+B)^2
    S = (B+C)^2
*/
const prompt = require('prompt-sync')();

var a = parseFloat(prompt('Informe o 1º número: '));
var b = parseFloat(prompt('Informe o 2º número: '));
var c = parseFloat(prompt('Informe o 3º número: '));
if (Number.isInteger(a) && a>=0 && Number.isInteger(b) && b>=0 &&Number.isInteger(c) && c>=0) {
    var r = (a+b)**2;
    var s = (b+c)**2;
    console.log(r);
    console.log(s);
    console.log('D: ' + (r+s)/2);
} else {
    console.log('Dados inválidos!');
}