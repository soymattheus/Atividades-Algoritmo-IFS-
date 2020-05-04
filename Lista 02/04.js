/*4) Receber valores de base e altura de um triângulo e verificar se são valores
válidos (positivos maiores que zero). Em caso afirmativo, calcular a área do
triângulo.*/
const prompt = require('prompt-sync')();

var base = parseFloat(prompt('Valor da BASE do triângulo: '));
var altura = parseFloat(prompt('Valor da ALTURA do triângulo: '));

if (base > 0 && altura > 0) {
    console.log('Área: ' + (base*altura/2));
} else {
    console.log('Dados inválidos!');
}