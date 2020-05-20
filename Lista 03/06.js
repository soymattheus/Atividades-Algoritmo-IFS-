/*6. Faça um algoritmo que leia o tempo de duração de um evento em uma fábrica
expressa em segundos e mostre-o expresso em horas, minutos e segundos.*/
const prompt = require('prompt-sync')();

var tempo = parseFloat(prompt('Digite o tempo do evento em segundos: '));
if (Number.isInteger(tempo)) {
    console.log('Tempo em segundos: ' + tempo);
    console.log('Tempo em minutos: ' + tempo/60);
    console.log('Tempo em horas: ' + tempo/3600);
} else {
    console.log('Dado inválido!');
}