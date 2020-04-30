/*21) Entrar com três números e imprimir o maior número(suponha números
diferentes).*/
const prompt = require('prompt-sync')();
var num1 = parseFloat(prompt('Informe o primeiro número: '));
var num2 = parseFloat(prompt('Informe o segundo número: '));
var num3 = parseFloat(prompt('Informe o terceiro número: '));
if ((num1 >= num2) && (num1 >= num3)){
    console.log(num1 + ' é o maior número!');
} else if ((num2 >= num1) && (num2 >= num3)){
    console.log(num2 + ' é o maior número!');
} else if ((num3 >= num2) && (num3 >= num2)){
    console.log(num3 + ' é o maior número!');
}