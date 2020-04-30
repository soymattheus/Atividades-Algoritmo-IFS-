/*38) Um plano de saúde, após as negociações com o governo enviou a tabela
abaixo. Entrar com o nome e a idade de
uma pessoa e imprimir o nome e o valor que ela deverá pagar.
- até 10 anos - R$ 30,00 - > 10 anos até 29 anos - R$ 60,00 -> 29 anos até 45
anos - R$ 120,00 - > 45 anos até 59
anos - R$ 150,00 - > 59 anos até 65 anos - R$ 250,00 - maior que 65 anos - R$
400,00 */
const prompt = require('prompt-sync')();

var nome = prompt('Informe o nome: ');
var idade = parseFloat(prompt('Informe a idade: '));

if (Number.isInteger(idade) && idade > 0) {
    if (idade <= 10) {
        console.log('Nome: ' + nome + '\nValor: R$30,00');
    } else if (idade > 10 && idade <= 29) {
        console.log('Nome: ' + nome + '\nValor: R$60,00');
    } else if (idade > 29 && idade <= 45) {
        console.log('Nome: ' + nome + '\nValor: R$120,00');
    } else if (idade > 45 && idade <= 59) {
        console.log('Nome: ' + nome + '\nValor: R$150,00');
    } else if (idade > 59 && idade <= 65) {
        console.log('Nome: ' + nome + '\nValor: R$250,00');
    } else if (idade > 65) {
        console.log('Nome: ' + nome + '\nValor: R$400,00')
    }
} else {
    console.log('Idade inválida!');
}