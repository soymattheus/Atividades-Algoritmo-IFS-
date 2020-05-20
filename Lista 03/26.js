/*26. Escrever um algoritmo que lê um valor em reais e calcula qual o menor
número possível de notas de 100, 50, 10, 5 e 1 em que o valor lido pode ser
decomposto. Escrever o valor lido e a relação de notas necessárias.*/
const prompt = require('prompt-sync')();

function ContarCedulas (arr) {
    var qtd = 0;
    while ((valor/arr) >= 1) {    
        qtd += Math.trunc(valor/arr);
        valor = valor%arr;
    }
    return qtd;
}
var valor = parseFloat(prompt('Digite o valor: '));
var guardarValor = valor;

console.log('O valor pode ser dividido da seguinte forma: ');
if (valor >= 100) {
    console.log(`${ContarCedulas(100)} cédula(as) de R$ 100,00`);
}
if (valor >= 50) {
    console.log(`${ContarCedulas(50)} cédula(as) de R$ 50,00`);
}
if (valor >= 10) {
    console.log(`${ContarCedulas(10)} cédula(as) de R$ 10,00`);
}
if (valor >= 5) {
    console.log(`${ContarCedulas(5)} cédula(as) de R$ 5,00`);
}
if (valor >= 1) {
    console.log(`${ContarCedulas(1)} cédula(as) de R$ 1,00`);
}