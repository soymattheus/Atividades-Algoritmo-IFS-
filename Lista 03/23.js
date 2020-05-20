/*23. Elaborar um algoritmo que lê 3 valores a,b,c e verifica se eles formam ou
não um triângulo. Supor que os valores lidos são inteiros e positivos. Caso os
valores formem um triângulo, calcular e escrever a área deste triângulo. Se não
formam triângulo escrever os valores lidos. ( se a > b + c não formam triângulo
algum, se a é o maior).*/
const prompt = require('prompt-sync')();

var a = parseFloat(prompt('Digite o valor de A: '));
var b = parseFloat(prompt('Digite o valor de B: '));
var c = parseFloat(prompt('Digite o valor de C: '));

if (a+b>c && a+c>b && b+c>a) {
    var p = (a+b+c)/2;
    console.log(`Área do Triângulo: ${Math.sqrt(p*(p-a)*(p-b)*(p-c)).toFixed(1)}m^2`);
} else {
    console.log(`Não é triângulo!\nValor de A: ${a}\nValor de B: ${b}\nValor de C: ${c}`);
}