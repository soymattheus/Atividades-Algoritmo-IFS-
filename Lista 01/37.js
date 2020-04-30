/**37) Faça um programa que leia a idade de uma pessoa e informe a sua classe
eleitoral:
- não eleitor (abaixo de 16 anos)
- eleitor obrigatório ( entre 18 e 65 anos)
- eleitor facultativo ( entre 16 e 18 anos e maior de 65 anos) */
const prompt = require('prompt-sync')();

var idade = parseFloat(prompt('Informe a idade: '));

if (Number.isInteger(idade) && idade > 0) {
    if (idade < 16) {
        console.log('NÃO ELEITOR!');
    } else if (idade >= 18 && idade <= 65) {
        console.log('ELEITOR OBRIGATÓRIO!');
    } else if (idade >= 16 && idade < 18 || idade > 65) {
        console. log('ALEITOR FACULTATIVO!');
    }
} else {
    console.log('Idade inválida!');
}