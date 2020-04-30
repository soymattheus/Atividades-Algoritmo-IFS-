/*51) Ler um número inteiro de 4 casas e imprimir se é ou não, múltiplo de quatro
o número formado pelos algarismos que estão nas casas das unidades de milhar e da
centenas.*/
const prompt = require('prompt-sync')();

var num = prompt('Digite um número inteiro de 4 dígitos: ');
if (Number.isSafeInteger(parseFloat(num)) && num.length == 4) {
    if (parseInt(num.slice(1,3)) % 4 == 0) {
        console.log(parseInt(num.slice(1,3)) + ' é múltiplo de 4.');
    } else {
        console.log(parseInt(num.slice(1,3)) + ' não é múltiplo de 4.');
    }
}