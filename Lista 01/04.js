/*4)Entrar com um número e informar se ele é ou não divisível por 5.*/
const prompt = require('prompt-sync')();
var num = parseInt(prompt('Informe o número:'));
if (Number.isInteger(num/5)) {
    console.log('É divisível por 5!');
} else {
    console.log('Não é divisível por 5!');
}