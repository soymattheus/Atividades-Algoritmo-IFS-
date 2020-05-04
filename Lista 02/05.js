/*5) Dado um número inteiro de segundos, mostrar a quantas horas, minutos e
segundos ele corresponde.*/
const prompt = require('prompt-sync')();

var segundos = parseFloat(prompt('Informe o número de segundos: '));
if (Number.isInteger(segundos)) {
    console.log('\nSegundos: ' + segundos);
    console.log('Minutos: ' + (segundos/60));
    console.log('Horas: ' + (segundos/3600).toFixed(2));
} else {
    console.log('Dados inválido!');
}