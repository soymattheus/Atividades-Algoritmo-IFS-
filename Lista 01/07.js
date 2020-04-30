/*7)Construir um algoritmo que indique se o número digitado está compreendido
entre 20 e 90 ou não.*/
const prompt = require('prompt-sync')();

var num = parseFloat(prompt('informe um número: '));
if ((num >= 20) && (num<=90)) {
    console.log('O número ' + num + ' está entre 20 e 90.');
} else {
    console.log('O número ' + num + ' não está entre 20 e 90.');
}