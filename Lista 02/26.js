/*26) Faça um algoritmo para ordenar um vetor de N inteiros (Dica: encontrar o
maior de todos os inteiros e trocá-lo com o último elemento do vetor, repetindo
este procedimento N vezes porém descartando, a cada iteração, os elementos já
ordenados).*/
const prompt = require('prompt-sync')();

var vetor = [];
var i = 1;
while (1) {
    console.clear();
    var dado = parseFloat(prompt(`Informe o ${i}º valor: `));
    if (Number.isInteger(dado)) {
        vetor.push(dado);
        i++;
        var resp = prompt('Deseja inserir mais dados? S/N [N]: ');
        if (resp.toUpperCase() != 'S') {
            break;
        }
    } else {
        console.clear();
        prompt('Dado inválido!\nPressione ENTER para continuar...');
    }
}

var trocou = true;
while (trocou) {
    trocou = false;
    for (i=0; i<vetor.length; i++) {
        if (vetor[i]>vetor[i+1]) {
            var aux = vetor[i+1];
            vetor[i+1] = vetor[i];
            vetor[i] = aux;
            trocou = true;
        }
    }
}

console.clear();
console.log('Ordenado: ' + vetor);