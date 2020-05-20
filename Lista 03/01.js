/*1. Construa um algoritmo que, tendo como dados de entrada dois pontos
quaisquer no plano, P(x1,y1) e P(x2,y2), escreva a distância entre eles. A
fórmula que efetua tal cálculo é: 
    d = raizq((x2-x1)^2 + (y2-y1)^2)
*/
const prompt = require('prompt-sync')();

var x1 = parseFloat(prompt('Informe o valor de X1: '));
var y1 = parseFloat(prompt('Informe o valor de Y1: '));
var x2 = parseFloat(prompt('Informe o valor de X2: '));
var y2 = parseFloat(prompt('Informe o valor de Y2: '));

var distancia = Math.sqrt((x2-x1)**2 + (y2-y1)**2);

console.log('Distância enter os dois pontos: ' + distancia);