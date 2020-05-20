/*21. Um vendedor precisa de um algoritmo que calcule o preço total devido por
um cliente. O algoritmo deve receber o código de um produto e a quantidade
comprada e calcular o preço total, usando a tabela abaixo. Mostre uma mensagem
no caso de código inválido.

Código  Preço unitário
'ABCD'   R$ 5,30
'XYPK'   R$ 6,00
'KLMP'   R$ 3,20
'QRST'   R$ 2,50*/
const prompt = require('prompt-sync')();

var codigo = prompt('Digite o código do pedido: ');
var qtd = parseFloat(prompt('Digite a quantidade do pedido: '));

if (Number.isInteger(qtd)) {
    switch (codigo.toUpperCase()) {
        case 'ABCD':
            console.log(`Valor total a ser pago: R$ ${(5.30*qtd).toFixed(2)}`);
            break;
        case 'XYPK':
            console.log(`Valor total a ser pago: R$ ${(6.00*qtd).toFixed(2)}`);
            break;
        case 'KLMP':
            console.log(`Valor total a ser pago: R$ ${(3.20*qtd).toFixed(2)}`);
            break;
        case 'QRST':
            console.log(`Valor total a ser pago: R$ ${(2.50*qtd).toFixed(2)}`);
            break;
        default:
            console.log('Código inxistente!');
    }
} else {
    console.log('A quantidade deve ser um número inteiro.');
}