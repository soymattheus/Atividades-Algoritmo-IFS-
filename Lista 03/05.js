/*5. Faça um algoritmo que leia as 3 notas de um aluno e calcule a média final
deste aluno. Considerar que a média é ponderada e que o peso das notas é: 2,3
e 5, respectivamente.*/
const prompt = require('prompt-sync')();

var notas = [];
for (i=1; i<4; i++) {
    while (1) {
        console.clear();
        var nota = parseFloat(prompt(`Informe a ${i}ª nota: `));
        if (!(Number.isNaN(nota))) {
            notas.push(nota);
            break;
        } else {
            prompt('Dado inválido!\nPressione ENTER para continuar...');
            console.clear();
        }
    }
}

console.log('Média Final: ' + ((notas[0]*2) + (notas[1]*3) + (notas[2]*5))/10);