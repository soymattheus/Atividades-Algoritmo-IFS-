/*14. Escreva um algoritmo que leia o código de um aluno e suas três notas.
Calcule a média ponderada do aluno, considerando que o peso para a maior
nota seja 4 e para as duas restantes, 3. Mostre o código do aluno, suas três
notas, a média calculada e uma mensagem "APROVADO" se a média for maior
ou igual a 5 e "REPROVADO" se a média for menor que 5.*/
const prompt = require('prompt-sync')();

var codigo = prompt('Informe o código do aluno: ');
nota1 = parseFloat(prompt('Digite a 1ª nota: '));
nota2 = parseFloat(prompt('Digite a 2ª nota: '));
nota3 = parseFloat(prompt('Digite a 3ª nota: '));

if (!(Number.isNaN(nota1) && Number.isNaN(nota2) && Number.isNaN(nota3))) {
    var notas = [];
    notas.push(nota1);
    notas.push(nota2);
    notas.push(nota3);
    var menor = notas[0];
    var meio = notas[0];
    var maior = notas[0];
    for (i=1; i<3; i++) {
        if (notas[i] < menor) {
            menor = notas[i];
        }
        if (notas[i] > maior) {
            maior = notas[i];
        }
    }

    for (i=1; i<3; i++) {
        if (notas[i] > menor && notas[i] < maior) {
            meio = notas[i];
        }
    }

    var media = (maior*4 + meio*3 + menor*3)/10

    console.log('Código do aluno: ' + codigo);
    console.log(`1ª Nota: ${nota1}\n2ª Nota: ${nota2}\n3ª Nota: ${nota3}`);
    console.log('Média: ' + media.toFixed(2));
    console.log(media>=5 ? 'Aprovado!' : 'Reprovado!');

} else {
    console.log('Ao menos um dos dados inseridos é inválido!');
}