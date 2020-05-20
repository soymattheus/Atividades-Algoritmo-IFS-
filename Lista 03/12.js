/*12. Elabore um algoritmo que dada a idade de um nadador classifica-o em uma
das seguintes categorias:
infantil A = 5 - 7 anos
infantil B = 8-10 anos
juvenil A = 11-13 anos
juvenil B = 14-17 anos
adulto = maiores de 18 anos*/
const prompt = require('prompt-sync')();

var idade = parseFloat(prompt('Informe a idade: '));
if (Number.isInteger(idade)) {
    if (idade>=5 && idade<=7) {
        console.log('Infantil A');
    } else if (idade>=8 && idade<=10) {
        console.log('Infantil B');
    } else if (idade>=11 && idade<=13) {
        console.log('Juvenil A');
    } else if (idade>=14 && idade<=17) {
        console.log('Juvenil B');
    } else if (idade>=18) {
        console.log('Adulto');
    } else {
        console.log('Não se enquadra em nenhuma categoria.');
    }
} else {
    console.log('Dado inválido!');
}