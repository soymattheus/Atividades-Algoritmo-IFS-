/*3. Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses
e dias e mostre-a expressa apenas em dias.*/
const prompt = require('prompt-sync')();

var idade = parseFloat(prompt('Digite a idade: '));
if (Number.isInteger(idade)) {
    console.log('Idade em ANOS: ' + idade);
    console.log('Idade em MESES: ' + idade*12);
    console.log('Idade em DIAS: ' + idade*365);
} else {
    console.log('Dado inválido!');
}