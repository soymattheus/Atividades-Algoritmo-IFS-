/*29. Escrever um algoritmo que lê o número de identificação, as 3 notas obtidas
por um aluno nas 3 verificações e a média dos exercícios que fazem parte da
avaliação. Calcular a média de aproveitamento, usando a fórmula:
MA = (Nota1 + Nota2 x 2 + Nota3 x 3 + ME )/7
A atribuição de conceitos obedece a tabela abaixo:
Média de Aproveitamento | Conceito
        > 9,0                 A
     7,5 e < 9,0              B
     6,0 e < 7,5              C
     4,0 e < 6,0              D
        < 4,0                 E

O algoritmo deve escrever o número do aluno, suas notas, a média dos
exercícios, a média de aproveitamento, o conceito correspondente e a
mensagem: APROVADO se o conceito for A,B ou C e REPROVADO se o
conceito for D ou E.*/
const prompt = require('prompt-sync')();

var identificação = prompt('Informe o número de identificação do aluno: ');
var nota1 = parseFloat(prompt('Informe a primeira nota: '));
var nota2 = parseFloat(prompt('Informe a segunda nota: '));
var nota3 = parseFloat(prompt('Informe a terceira nota: '));
var mediaExercicios = parseFloat(prompt('Informe a nota média dos exercícios: '));

var MA = (nota1 + nota2 * 2 + nota3 * 3 + mediaExercicios )/7;

if (MA < 4) {
        var aproveitamento = 'E';
} else if (MA >= 4 && MA < 6) {
        var aproveitamento = 'D';
} else if (MA >= 6 && MA < 7.5) {
        var aproveitamento = 'C';
} else if (MA >= 7.5 && MA < 9) {
        var aproveitamento = 'B';
} else if (MA >= 9) {
        var aproveitamento = 'A';
}

console.log(`\nRESULTADO\nNúmero do aluno: ${identificação}\nNota 1: ${nota1} | Nota 2: ${nota2} | Nota 3: ${nota3}\nMédia dos exercícios: ${mediaExercicios} | Média de aproveitamento: ${MA.toFixed(2)}\nConceito: ${aproveitamento} | ${(aproveitamento=='D' || aproveitamento=='E') ? "Reprovado!" : "Aprovado!"}`);