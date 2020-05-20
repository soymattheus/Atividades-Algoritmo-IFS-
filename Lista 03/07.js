/*7. O custo ao consumidor de um carro novo é a soma do custo de fábrica com a
percentagem do distribuidor e dos impostos (aplicados ao custo de fábrica).
Supondo que a percentagem do distribuidor seja de 28% e os impostos de 45%,
escrever um algoritmo que leia o custo de fábrica de um carro e escreva o custo
ao consumidor.*/
const prompt = require('prompt-sync')();

var valor = parseFloat(prompt('Digite o valor: '));
if (!(Number.isNaN(valor))) {
    console.log('Valor final: ' + (valor + valor*0.28 + valor*0.45));
} else {
    console.log('Dado inválido!');
}