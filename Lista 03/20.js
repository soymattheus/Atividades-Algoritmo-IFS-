/*20. Um vendedor necessita de um algoritmo que calcule o preço total devido por um
cliente. O algoritmo deve receber o código de um produto e a quantidade comprada e
calcular o preço total, usando a tabela abaixo:

|--------------------|------------------|
| Código do Produto  |  Preço unitário  |
|--------------------|------------------|
|        1001        |       5,32       |
|        1324        |       6,45       |
|        6548        |       2,37       |
|        0987        |       5,32       |
|        7623        |       6,45       |
|--------------------|------------------|*/
const prompt = require('prompt-sync')();

var codigo = prompt('Digite o código do pedido: ');
var qtd = parseFloat(prompt('Digite a quantidade do pedido: '));

if (Number.isInteger(qtd)) {
    switch (codigo) {
        case '1001':
            console.log(`Valor total a ser pago: R$ ${(5.32*qtd).toFixed(2)}`);
            break;
        case '1324':
            console.log(`Valor total a ser pago: R$ ${(6.45*qtd).toFixed(2)}`);
            break;
        case '6548':
            console.log(`Valor total a ser pago: R$ ${(2.37*qtd).toFixed(2)}`);
            break;
        case '0987':
            console.log(`Valor total a ser pago: R$ ${(5.32*qtd).toFixed(2)}`);
            break;
        case '7623':
            console.log(`Valor total a ser pago: R$ ${(6.45*qtd).toFixed(2)}`);
            break;
        default:
            console.log('Código inxistente!');
    }
} else {
    console.log('A quantidade deve ser um número inteiro.');
}