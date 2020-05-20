/*4. Faça um algoritmo que leia a idade de uma pessoa expressa em dias e
mostre-a expressa em anos, meses e dias.*/
const prompt = require('prompt-sync')();

var idade = parseFloat(prompt('Digite a idade expressa em dias: '));
if (Number.isInteger(idade)) {
    console.log('Idade em ANOS: ' + (idade/365).toFixed(2));
    console.log('Idade em MESES: ' + (idade/30).toFixed(2));
    console.log('Idade em DIAS: ' + idade);
} else {
    console.log('Dado inválido!');
}