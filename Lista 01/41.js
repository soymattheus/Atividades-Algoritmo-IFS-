/*41)Faça um algoritmo que possa imprimir o menu abaixo:
MENU ESTADO CIVIL
1 – solteiro(a)
2 – desquitado(a)
3 – casado(a)
4 – divorciado(a)
5 – viúvo(a)
OPCAO:
O usuário deverá selecionar uma das opções, digitando um número e este
deverá escrever o estado civil da pessoa.
Emitir mensagem de erro caso seja escolhida uma opção inexistente. */
const prompt = require('prompt-sync')();

console.log('MENU ESTADO CIVIL\n1 – solteiro(a)\n2 – desquitado(a)\n3 – casado(a)\n4 – divorciado(a)\n5 – viúvo(a)');
var opc = prompt('OPCAO:');

switch (opc) {
    case '1':
        console.log('Solteiro(a)');
        break;
    case '2':
        console.log('Desquitado(a)');
        break;
    case '3':
        console.log('Casado(a)');
        break;
    case '4':
        console.log('Divorciado(a)');
        break;
    case '5':
        console.log('Viúvo(a)');
        break;
    default:
        console.log('Opção inválida!');
}