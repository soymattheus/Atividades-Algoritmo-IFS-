/*1)Entrar com um número e imprimi-lo caso seja maior do que 20.*/

const prompt = require('prompt-sync')();
var num = parseInt(prompt('Informe um número: '));
if (num > 20) {
    console.log('Número maior que 20.\nNúmero digitado: '+num);
} else {
    console.log('Número menor que 20.');
}