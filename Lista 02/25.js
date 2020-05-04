/*25) Faça um algoritmo para receber do usuário 10 nomes de postos de gasolina
e os preços da gasolina em cada um deles e depois mostrar os nomes e os 
respectivos preços em ordem, do menor para o maior preço. (Dica: utilizar dois
vetores para armazenar os nomes e os preços).*/
const prompt = require('prompt-sync')();

var nomePosto = [];
var precoPosto = [];
console.clear();
for (i=0; i<10; i++) {
    while (1) {
        var nome = prompt(`Nome do ${i+1}º posto: `);
        var preco = parseFloat(prompt(`Valor da gasolina do ${i+1}º posto: `));
        if (!(Number.isNaN(preco))) {
            nomePosto.push(nome);
            precoPosto.push(preco);
            break;
        } else {
            console.clear();
            prompt('O valor digitado é inválido!\nPressione ENTER para continuar...');
            console.clear();
        }
    }
}

var trocou = true;
while (trocou) {
    trocou = false;
    for (i=0; i<precoPosto.length; i++) {
        if (precoPosto[i]>precoPosto[i+1]) {
            //ORDENA PREÇOS
            var auxPreco = precoPosto[i+1];
            precoPosto[i+1] = precoPosto[i];
            precoPosto[i] = auxPreco;
            //ORDENA NOMES
            var auxNome = nomePosto[i+1];
            nomePosto[i+1] = nomePosto[i];
            nomePosto[i] = auxNome;
            //ATRIBUI TRUE À VARIÁVEL DA REPETIÇÃO
            trocou = true;
        }
    }
}
console.log('POSTOS ORDENADOS DE FORMA CRESCENTE PELO PREÇO DA GASOLINA');
for (i=0; i<precoPosto.length; i++) {
    console.log(`Nome do ${i+1}º posto: ${nomePosto[i]}`);
    console.log(`Preço do ${i+1}º posto: ${precoPosto[i]}`);
    console.log('');
}