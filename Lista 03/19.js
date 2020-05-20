/*19. Um usuário deseja um algoritmo onde possa escolher que tipo de média
deseja calcular a partir de 3 notas. Faça um algoritmo que leia as notas, a opção
escolhida pelo usuário e calcule a média.
1 -aritmética
2 -ponderada (3,3,4)
3 -harmônica */
const prompt = require('prompt-sync')();

function mediaAritimetica (a,b,c) {
    return ((a+b+c)/3).toFixed(2);
}

function mediaPonderada (a,b,c) {
    return (((a*3)+(b*3)+(c*4))/10).toFixed(2);
}

function mediaHarmonica (a,b,c) {
    return (3/((1/a)+(1/b)+(1/c))).toFixed(2);
}

var notas = [];
for (i=0; i<3; i++) {
    console.clear();
    while (1) {
        var nota = parseFloat(prompt(`Informe a ${i+1}ª nota: `));
        if (!(Number.isNaN(nota))) {
            notas.push(nota);
            break;
        } else {
            prompt('Dado inválido!\nPressione ENTER para continuar...');
            console.clear();
        }
    }
}
console.clear();
var opc = prompt('Escolha a opção de operação: ');
switch (opc) {
    case '1':
        console.log('Média Aritimética: ' + mediaAritimetica(notas[0],notas[1],notas[2]));
        break;
    case '2':
        console.log('Média Ponderada: ' + mediaPonderada(notas[0],notas[1],notas[2]));
        break;
    case '3':
        console.log('Média Harmônica: ' + mediaHarmonica(notas[0],notas[1],notas[2]));
        break;
    default:
        console.log('Opção inválida!');
}