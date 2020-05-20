/*18. Um banco concederá um crédito especial aos seus clientes, variável com o
saldo médio no último ano. Faça um algoritmo que leia o saldo médio de um
cliente e calcule o valor do crédito de acordo com a tabela abaixo. Mostre uma
mensagem informando o saldo médio e o valor do crédito. (use o comando caso-de
e não faça repetições)
|--------------|-----------------------------|
|    Saldo     |       médio Percentual      |
|--------------|-----------------------------|
| de 0 a 200   |        nenhum crédito       |
| de 201 a 400 | 20% do valor do saldo médio |
| de 401 a 600 | 30% do valor do saldo médio |
| acima de 601 | 40% do valor do saldo médio |
|--------------|-----------------------------| */
const prompt = require('prompt-sync')();

var saldoMedio = parseFloat(prompt('Digite o saldo médio: '));
if (!(Number.isNaN(saldoMedio)) && saldoMedio>= 0) {
    if (saldoMedio <= 200) {
        console.log(`Saldo Médio: ${saldoMedio}\nCrédito: Nenhum Crédito`);
    } else if (saldoMedio >= 201 && saldoMedio <= 400) {
        console.log(`Saldo Médio: ${saldoMedio}\nCrédito: R$ ${(saldoMedio*0.2).toFixed(2)}`);
    } else if (saldoMedio >= 401 && saldoMedio <= 600) {
        console.log(`Saldo Médio: ${saldoMedio}\nCrédito: R$ ${(saldoMedio*0.3).toFixed(2)}`);
    } else if (saldoMedio >= 601) {
        console.log(`Saldo Médio: ${saldoMedio}\nCrédito: R$ ${(saldoMedio*0.4).toFixed(2)}`);
    }
} else {
    console.log('Dado inválido!');
}