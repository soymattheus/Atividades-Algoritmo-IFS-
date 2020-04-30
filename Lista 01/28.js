/*28) Ler três números, possíveis arr de um triângulo e imprimir a classificação
segundo os arr.*/
const prompt = require('prompt-sync')();

function validarTriangulo (arr) {
    if ((arr[0]+arr[1]) > arr[2] && (arr[0]+arr[2]) > arr[1] && (arr[2]+arr[1]) > arr[0]) {
        return true;
    } else {
        return false;
    }
}

var lados = [];

for (i=1; i < 4; i++) {
    lados.push(parseInt(prompt(`Informe o tamanho do ${i}º lado: `)));
}

if (!(validarTriangulo(lados))) {
    console.log('Não é triângulo!');
} else {
    if ((lados[0] != lados[1] && lados[0] != lados[2]) && (lados[1] != lados[2])) {
        console.log('Triângulo ESCALENO!');
    } else if ((lados[0] == lados[1] && lados[0] != lados[2]) || (lados[0] == lados[2] && lados[0] != lados[1]) || 
    (lados[1] == lados[0] && lados[1] != lados[2]) || (lados[1] == lados[2] && lados[1] != lados[0]) ||
    (lados[2] == lados[0] && lados[2] != lados[1]) || (lados[2] == lados[1] && lados[2] != lados[0])) {
        console.log('Triângulo ISÓSCELES!');
    } else if ((lados[0] == lados[1] && lados[1] == lados[2])) {
        console.log('Triãngulo EQUILÁTERO!');
    }
}