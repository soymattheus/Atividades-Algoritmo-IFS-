/*27. Escrever um algoritmo que lê:
- a percentagem do IPI a ser acrescido no valor das peças
- o código da peça 1, valor unitário da peça 1, quantidade de peças 1
- o código da peça 2, valor unitário da peça 2, quantidade de peças 2*

O algoritmo deve calcular o valor total a ser pago e apresentar o resultado.
        Fórmula : (valor1*quant1 + valor2*quant2)*(IPI/100 + 1) */
const prompt = require('prompt-sync')();

var ipi = parseInt(prompt('Porcentagem do IPI: '));

var codigo1 = prompt('Código da primeira peça: ');
var valor1 = parseFloat(prompt('Valor da primeira peça: '));
var qtd1 = parseFloat(prompt('Quantidade da primeira peça: '));

var codigo2 = prompt('Código da segunda peça: ');
var valor2 = parseFloat(prompt('Valor da segunda peça: '));
var qtd2 = parseFloat(prompt('Quantidade da segunda peça: '));

console.log('Valor a ser pago: ' + ((valor1*qtd1 + valor2*qtd2)*(ipi/100 + 1)));