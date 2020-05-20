/*15. Faça um algoritmo que leia um nº inteiro e mostre uma mensagem indicando
se este número é par ou ímpar, e se é positivo ou negativo.*/
const prompt = require('prompt-sync')();

var num = parseFloat(prompt('Digite o número: '));
console.log((num%2==0 ? 'O número é PAR' : 'O número é ÍMPAR') + (num<0 ? ' e NEGATIVO' : ' e POSITIVO'));