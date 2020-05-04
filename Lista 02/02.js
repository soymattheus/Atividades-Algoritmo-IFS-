/*2) Receber 3 valores numéricos, X, Y e Z, e verificar se esses valores podem
corresponder aos lados de um triângulo. Em caso afirmativo, informar ao usuário
se o triângulo é equilátero, isóscelos ou escaleno.*/
const prompt = require('prompt-sync')();

var x = parseFloat(prompt('Digite o valor do lado X: '));
var y = parseFloat(prompt('Digite o valor do lado Y: '));
var z = parseFloat(prompt('Digite o valor do lado Z: '));

if ((x+y) >= z && (x+z) >= y && (z+y) >= x) {
    if (x == y && y == z) {
        console.log('EQUILÁTERO!');
    } else if (x != y && x != z && y != z) {
        console.log('ESCALENO!');
    } else {
        console.log('ISÓSCELES!');
    }
} else {
    console.log('Não é triângulo!');
}