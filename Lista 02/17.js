/*17) Faça um algoritmo que:
- receba uma frase (literal) do usuário;
- receba uma sequência qualquer de caracteres do usuário (também em forma
literal);
- calcule quantas vezes aquela sequência de caracteres ocorre dentro da frase
digitada.
Exemplo: se o usuário digitar a frase “A ARANHA ARRANHA A RÃ” e depois
digitar a sequência “RA”, o algoritmo deve mostrar “O número de vezes que a
sequência RA aparece na frase é 3” (considerar que o A acentuado é igual a um
A normal)*/
const prompt = require('prompt-sync')();

var frase = prompt('Digite uma frase: ');
var sequencia = prompt('Digite a sequência que deve ser encontrada: ');
var total = 0;
for (i=1; i<=frase.length-1; i++) {
    if (frase.slice(i-1,i+sequencia.length-1).toUpperCase() == sequencia.toUpperCase()) {
        total += 1;
    }
}

console.log('Total de repetições: ' + total);