/*42) Faça o algoritmo que possa imprimir o menu abaixo:
1 - VATAPÁ
2 - PIZZA
3 - MACARRONADA
4 - FEIJOADA
OPCAO:

O usuário deverá selecionar uma das opções do menu e este deverá informar o
preço do prato. (este exercício terá um
desempenho melhor quando você aprender as estruturas de repetição).*/
const prompt = require('prompt-sync')();

console.log('1 - VATAPÁ\n2 - PIZZA\n3 - MACARRONADA\n4 - FEIJOADA');
var opc = prompt('OPÇÃO: ');

switch (opc) {
    case '1':
        console.log('Vatapá!\nValor: R$10,00');
        break;
    case '2':
        console.log('Pizza!\nValor: R$15,00');
        break;
    case '3':
        console.log('Macarronada!\nValor: R$8,50');
        break;
    case '4':
        console.log('Feijoada!\nValor: R$12,90');
        break;
    default:
        console.log('Dado inválido!');
}