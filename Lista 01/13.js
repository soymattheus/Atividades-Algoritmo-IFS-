/*13) Entrar com o nome da capital do Brasil. Se a resposta estiver correta,
imprimir PARABÉNS, caso contrário, ERROU.
(Considerar: BRASÍLIA ou Brasília)*/
const prompt = require('prompt-sync')();
var capital = prompt('Qual a capital do Brasil?: ');
if (capital.toLocaleUpperCase() == 'BRASILIA') {
    console.log('PARABÉNS!')
} else {
    console.log('ERROU!');
}