/*54)Faça um algoritmo que leia o destino do passageiro, se a viagem inclui
retorno (ida e volta) e informe o preço da
passagem conforme a tabela abaixo.
DESTINO              IDA        VOLTA
Região Norte         R$500,00   R$900,00
Região Nordeste      R$350,00   R$650,00
Região Centro-Oeste  R$350,00   R$600,00
Região Sul           R$300,00   R$550,00*/
const prompt = require('prompt-sync')();

var destino = prompt('Informe o destino: ');
var volta = prompt('Inclui viagem de volta? ');
volta = volta.toUpperCase() == 'SIM'? true : false;

switch (destino.toUpperCase()) {
    case 'NORTE':
        if (volta){ 
            console.log('IDA: R$500,00 | VOLTA: R$900,00\nVALOR TOTAL: R$1400,00');
        } else {
            console.log('IDA: R$500,00\nVALOR TOTAL: R$500,00');
        }
        break;
    case 'NORDESTE':
        if (volta){ 
            console.log('IDA: R$350,00 | VOLTA: R$650,00\nVALOR TOTAL: R$1000,00');
        } else {
            console.log('IDA: R$500,00\nVALOR TOTAL: R$350,00');
        }
        break;
    case 'CENTRO-OESTE':
        if (volta){ 
            console.log('IDA: R$350,00 | VOLTA: R$600,00\nVALOR TOTAL: R$950,00');
        } else {
            console.log('IDA: R$500,00\nVALOR TOTAL: R$350,00');
        }
        break;
    case 'SUL':
        if (volta){ 
            console.log('IDA: R$300,00 | VOLTA: R$550,00\nVALOR TOTAL: R$850,00');
        } else {
            console.log('IDA: R$300,00\nVALOR TOTAL: R$350,00');
        }
        break;
    default:
        console.log('Destino não disponível!');
}