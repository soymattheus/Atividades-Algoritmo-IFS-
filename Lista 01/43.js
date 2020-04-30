/*43) Ler um número entre 1 e 12, e escrever o mês correspondente. Caso o
usuário digite um número fora deste
intervalo, deverá aparecer um uma mensagem, informando que não existe mês
com este número. 
*/

const prompt = require('prompt-sync')();
var meses = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];

var opc = parseFloat(prompt('Digite o número do mês desejado: '));
if (Number.isInteger(opc) && opc > 0 && opc <13) {
    console.log('O número digitado corresponde aos mês de ' + meses[opc-1]);
} else {
    console.log('Dado inválido!\nDigite um número inteiro de 1 a 12.');
}