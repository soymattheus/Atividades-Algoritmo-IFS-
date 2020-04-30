/*44)Um comerciante calcula o valor da venda, tendo em vista à tabela abaixo:
valor da compra valor da venda
valor < R$ 10,00 lucro de 70%
R$10,00 valor < R$ 30,00 lucro de 50%
R$30,00 valor < R$ 50,00 lucro de 40%
valor R$50,00 lucro de 30% */
const prompt = require('prompt-sync')();

var valor = parseFloat(prompt('Valor da venda: R$'));

if (valor > 0 && valor < 10) {
        console.log('70% de Lucro\nLucro: R$' + (valor+(valor*0.7)));
} else if (valor >= 10 && valor < 30) {
    console.log('50% de Lucro\nLucro: R$' + (valor+(valor*0.5)));
} else if (valor >= 30 && valor < 50) {
    console.log('40% de Lucro\nLucro: R$' + (valor+(valor*0.4)));
} else {
    console.log('30% de Lucro\nLucro: R$' + (valor+(valor*0.3)));
}