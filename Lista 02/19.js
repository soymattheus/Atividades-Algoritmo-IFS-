/*19) Escreva uma função (somente a função!) MIX que receba dois valores
literais como parâmetros e retorne o conteúdo dos dois literais intercalados,
caracter a caracter.
Ex: MIX(“primeiro”, “segundo”) => “psreigmuenidroo”*/
const prompt = require('prompt-sync')();

function MIX(arr1,arr2) {
    var i = 1;
    var palavra = '';
    while (i<=arr1.length || i<=arr2.length) {
        if (i <= arr1.length) {
            palavra += arr1.slice(i-1,i);
        }
        if (i <= arr2.length) {
            palavra += arr2.slice(i-1,i);
        }
        i += 1;
    }
    return palavra;
}
var palavra1 = prompt('Primeira palavra: ');
var palavra2 = prompt('Segunda palavra: ');
console.log('MIX: ' + MIX(palavra1,palavra2));