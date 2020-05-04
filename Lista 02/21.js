/*21) Receber do usuário uma lista de N nomes e idades de pessoas, onde N
também é fornecido pelo usuário, e mostrar o nome e a idade da pessoa mais
idosa e da pessoa mais jovem.*/
const prompt = require('prompt-sync')();

var dados = [[],[]];
var resp = true;
var i = 0;
while (resp) {
    while (1) {
        var nome = prompt('Nome: ');
        var idade = parseFloat(prompt('Idade: '));
        console.log(Number.isInteger(idade));
        if (Number.isInteger(idade)) {
            dados[i].push(nome);
            dados[i+1].push(idade);
            break;
        }
    }
    var opc = prompt('Deseja adicionar mais alguém? [S/N] ');
    opc.toUpperCase() == 'S' ? resp=true : resp=false;
}

var jovem = [[dados[0][0], dados[1][0]]];
var idosa = [[dados[0][0], dados[1][0]]];

for (i=1; i<dados[0].length; i++) {
    if (dados[1][i] < jovem[0][1]) {
        jovem = ([[dados[0][i], dados[1][i]]]);
    }
    if (dados[1][i] > idosa[0][1]) {
        idosa = ([[dados[0][i], dados[1][i]]]);
    }
}

console.log('\nJovem >>>\nNome: ' + jovem[0][0] + '\nIdade: ' + jovem[0][1]);
console.log('\nIdosa >>>\nNome: ' + idosa[0][0] + '\nIdade: ' + idosa[0][1]);