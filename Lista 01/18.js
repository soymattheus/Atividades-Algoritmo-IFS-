/*18) Entrar com dois números e imprimir o menor número (suponha números
diferentes).*/
const prompt = require('prompt-sync')();
var num1 = parseFloat(prompt('Informe o primeiro número: '));
var num2 = parseFloat(prompt('informe o segundo número: '));
if (num1 < num2){
    console.log(num1 + ' é o menor!');
} else if (num1 > num2) {
    console.log(num2 + ' é o menor!');
} else {
    console.log('Os númeors são iguais!');
}