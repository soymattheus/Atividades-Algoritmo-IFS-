/*9) Entrar com um número e imprimir uma das mensagens: maior do que 20 , é
igual a 20 ou é menor do que 20.*/
const prompt = require('prompt-sync')();
var num = parseFloat(prompt('Digite um número: '));
if (num < 20) {
    console.log('Número menor que 20.');
} else if (num > 20) {
    console.log('Número maior que 20.');
} else {
    console.log('Número igual a 20.')
}