/*12) Entrar com nome, nota da PR1 e nota da PR2 de 1 aluno. Imprimir: nome,
nota da PR1, nota da PR2, média
truncada e uma das mensagens: AP , RP ou PF (a média é 7 para aprovação,
menor que 3 para reprovação e as demais
em prova final).*/
const prompt = require('prompt-sync')();
var nome = prompt('Informe o nome do aluno: ');
var nota1 = parseFloat(prompt('Informe a primeira nota:'));
var nota2 = parseFloat(prompt('Informe a segunda nota: '));
 console.log('Nome do aluno: ' + nome);
 console.log('Nota 1: ' + nota1 + '| Nota 2: ' + nota2);
 console.log('Média: ' + (nota1 + nota2)/2);
 if (((nota1 + nota2)/2) < 3) {
     console.log('Situação: Reprovado!');
 } else if (((nota1 + nota2)/2) >= 7) {
     console.log('Situação: Aprovado!');
 } else {
     console.log('Situação: Em Recuperação!')
 }