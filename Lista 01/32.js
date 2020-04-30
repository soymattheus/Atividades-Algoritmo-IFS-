/*32)Um comerciante comprou um produto e quer vendê-lo com um lucro de 45%
se o valor da compra for menor que R$ 20,00 caso contrário, o lucro será de
30%. Entrar com o valor do produto e imprimir o valor da venda.*/
const prompt = require('prompt-sync')();

var valor = parseFloat(prompt('Informe o valor do produto: R$'));
if (valor > 0 && valor < 20) {
    console.log('Valor da venda: R$' + (valor = valor+(valor * 0.45)));
} else if (valor >= 20) {
    console.log('Valor da venda: R$' + (valor = valor+(valor * 0.3)));
} else {
    console.log('Valor inválido!');
}