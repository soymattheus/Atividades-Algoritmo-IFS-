/*16) Faça um algoritmo que:
- receba uma frase (literal) do usuário;
- receba um caracter qualquer do usuário (também na forma literal). Se o usuário
digitar mais do que um caracter deve ser mostrada uma mensagem de erro e
pedir para que ele digite novamente;
- calcule quantas vezes aquele caracter ocorre na frase digitada inicialmente e
mostre ao usuário.*/
const prompt = require('prompt-sync')();
console.clear();
var frase = prompt('Digite uma frase: ');
while (1) {
    var letra = prompt('Digite uma letra: ');
    if (letra.length == 1) {
        break;
    } else {
        prompt('Digite apenas UMA letra.\nPressione ENTER para continuar...');
        console.clear();
        console.log('Digite uma frase: ' + frase);
    }
}
var total = 0;
for (i=0; i<=frase.length; i++) {
    if (frase.slice(i,i+1) == letra) {
        total += 1;
    }
}
console.log('Total de repetições: ' + total);