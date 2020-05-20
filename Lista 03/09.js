/*9. Calcule a média aritmética das 3 notas de um aluno e mostre, além do valor
da média, uma mensagem de "Aprovado", caso a média seja igual ou superior a
6, ou a mensagem "reprovado", caso contrário.*/
const prompt = require('prompt-sync')();

var nota1 = parseFloat(prompt('Digite a 1ª nota: '));
var nota2 = parseFloat(prompt('Digite a 2ª nota: '));
var nota3 = parseFloat(prompt('Digite a 3ª nota: '));

if ((nota1 + nota2 + nota3)/3 >= 6) {
    console.log('Média: ' + ((nota1 + nota2 + nota3)/3).toFixed(2));
    console.log('Situação: Aprovado!');
} else {
    console.log('Média: ' + ((nota1 + nota2 + nota3)/3).toFixed(2));
    console.log('Situação: Reprovado!');
}