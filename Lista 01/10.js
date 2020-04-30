/*10) Entrar com um número e informar se o dígito da dezena é par ou ímpar*/
const prompt = require('prompt-sync')();
var num = prompt('Informe o número: ');
if (!(Number.isInteger(parseInt(num)))) {
    console.log('Dado inválido!');
} else if ((num.length == 1) || num.length == 2 && num.slice(-2,-1) == '+' || num.slice(-2,-1) == '-') {
    console.log('O número não possui dezena!');
} else if ((num.slice(-2,-1)%2) == 0){
    console.log("O dígito que representa a dezena é PAR!");
} else {
    console.log("O dígito que representa a dezena é ÍMPAR!");
}