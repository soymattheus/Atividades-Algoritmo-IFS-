/*16. O cardápio de uma lancheria é o seguinte:

|-----------------|---------|--------|
|  Especificação  |  Código |  Preço |
------------------|---------|--------|
| Cachorro quente |  100    |  1,20  |
| Bauru simples   |  101    |  1,30  |
| Bauru com ovo   |  102    |  1,50  |
| Hambúrger       |  103    |  1,20  |
| Cheeseburguer   |  104    |  1,30  |
| Refrigerante    |  105    |  1,00  |
|-----------------|---------|--------|

Escrever um algoritmo que leia o código do item pedido, a quantidade e calcule
o valor a ser pago por aquele lanche. Considere que a cada execução somente
será calculado um item.*/
const prompt = require('prompt-sync')();

var codigo = prompt('Digite o código do pedido: ');
var qtd = parseFloat(prompt('Digite a quantidade do pedido: '));

if (Number.isInteger(qtd)) {
    switch (codigo) {
        case '100':
            console.log(`Produto: Cachorro Quente | Quantidade: ${qtd}`);
            console.log(`Valor total a ser pago: R$ ${(1.20*qtd).toFixed(2)}`);
            break;
        case '101':
            console.log(`Produto: Bauru Simples | Quantidade: ${qtd}`);
            console.log(`Valor total a ser pago: R$ ${(1.30*qtd).toFixed(2)}`);
            break;
        case '102':
            console.log(`Produto: Bauru com Ovo | Quantidade: ${qtd}`);
            console.log(`Valor total a ser pago: R$ ${(1.50*qtd).toFixed(2)}`);
            break;
        case '103':
            console.log(`Produto: Hambúrger | Quantidade: ${qtd}`);
            console.log(`Valor total a ser pago: R$ ${(1.20*qtd).toFixed(2)}`);
            break;
        case '104':
            console.log(`Produto: Cheeseburguer | Quantidade: ${qtd}`);
            console.log(`Valor total a ser pago: R$ ${(1.30*qtd).toFixed(2)}`);
            break;
        case '105':
            console.log(`Produto: Refrigerante | Quantidade: ${qtd}`);
            console.log(`Valor total a ser pago: R$ ${(1*qtd).toFixed(2)}`);
            break;
        default:
            console.log('Código inxistente!');
    }
} else {
    console.log('A quantidade deve ser um número inteiro.');
}