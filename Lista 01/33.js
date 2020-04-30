/*33)Entrar com a idade de uma pessoa e informar:
- se é maior de idade
- se é menor de idade
- se é maior de 65 anos */
const prompt = require('prompt-sync')();

var idade = parseInt(prompt('Informe a idade: '));
if (idade >= 0 && idade < 18) {
    console.log('Pessoa menor de idade!');
} else if (idade >= 18 && idade <= 65) {
    console.log('Pessoa maior de idade!');
} else if (idade > 65) {
    console.log('Pessoa maior de 65!');
} else {
    console.log('Idade inválida!');
}