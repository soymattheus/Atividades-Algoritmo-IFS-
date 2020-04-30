/*45)Faça o algoritmo que possa entrar com nome do produto e valor da compra e
imprima o nome do produto e o valor da venda.*/
const prompt = require('prompt-sync')();

var produto = prompt('Nome do produto: ');
var valor = parseFloat(prompt('Valor do produto: R$'));
console.log(`\n************************\n   Dados da Venda\nProduto: ${produto}\nValor: R$${valor.toFixed(2)}\n************************`);