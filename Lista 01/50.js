/*50)O mês em que o emplacamento do carro deve ser renovado é determinado
pelo último número da placa do mesmo. Considerando este dado faça um algoritmo
que, a partir da leitura da placa do carro diga o mês em que o
emplacamento deve ser renovado.
Obs: Leia a placa do carro em uma variável caracter.*/
const prompt = require('prompt-sync')();

var meses = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];

var placa = prompt('Informe a placa do veículo: ');

if (Number.isInteger(placa.slice(placa.length-1)-1)) {
    console.log(`O emplacamento deve ser renovado em ${meses[placa.slice(placa.length-1)-1]}`);
} else {
    console.log('Placa inválida!');
}