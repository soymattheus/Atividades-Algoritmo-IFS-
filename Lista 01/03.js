/*3)Entrar com um número e imprimir uma das mensagens: par ou ímpar.*/
const prompt = require('prompt-sync')();

var num = parseInt(prompt('Informe o número: '));
if ((num%2) == 0) {
    console.log('Par');
} else {
    console.log('Ímpar');
}