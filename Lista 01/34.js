/*34) Entrar com o ano de nascimento de uma pessoa e o ano atual. Imprimir a
idade da pessoa. Não se esqueça de verificar se o ano de nascimento é um
ano válido.*/
const prompt = require('prompt-sync')();

var anoNascimento = prompt('Informe o ano de nascimento: ');

if (Number.isInteger(parseFloat(anoNascimento)) && anoNascimento > 0) {
    console.log('Idade: ' + (2020 - parseFloat(anoNascimento)));
} else {
    console.log('O dado digitado é inválido!');
}