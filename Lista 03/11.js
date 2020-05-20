/*11. Elaborar um algoritmo que lê 2 valores a e b e os escreve com a mensagem:
?São múltiplos? ou ?Não são múltiplos?.*/
const prompt = require('prompt-sync')();

var a = parseFloat(prompt('Digite o valor de A: '));
var b = parseFloat(prompt('Digite o valor de B: '));

if (a>b) {
    console.log(a%b == 0 ? 'São múltiplos' : 'Não são múltiplos');
} else {
    console.log(b%a == 0 ? 'São múltiplos' : 'Não são múltiplos');
}