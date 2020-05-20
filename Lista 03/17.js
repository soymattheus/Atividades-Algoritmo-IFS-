/*17. Tendo como dados de entrada a altura e o sexo de uma pessoa (?M?
masculino e ?F? feminino), construa um algoritmo que calcule seu peso ideal,
utilizando as seguintes fórmulas:
- para homens: (72.7*h)-58
- para mulheres: (62.1*h)-44.7 */
const prompt = require('prompt-sync')();

var altura = parseFloat(prompt('Digite a altura: '));
var sexo = prompt('Qual o sexo? [M/F] ');

if (!(Number.isNaN(altura)) && sexo.toUpperCase()=='M' || sexo.toUpperCase()=='F') {
    console.log(sexo.toUpperCase()=='M' ? `Peso ideal: ${((72.7*altura)-58).toFixed(2)}` : `Peso ideal: ${((62.1*altura)-44.7).toFixed(2)}`);
} else {
    console.log('Dado inválido inserido!');
}