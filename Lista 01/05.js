/*5)Entrar com um número e informar se ele é divisível por 3 e por 5.*/
const prompt = require('prompt-sync')();
var num = parseInt(prompt('Informe o número:'));
if (Number.isInteger(num/5) && Number.isInteger(num/3)) {
    console.log('É divisível por 5 e 3!');
} else {
    console.log('Não é divisível por 5 e 3!');
}