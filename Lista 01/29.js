/*29) Ler três números, possíveis lados de um triângulo e imprimir a classificação
segundo os ângulos.*/
const prompt = require('prompt-sync')();

function validarTriangulo (arr) {
    if ((arr[0]+arr[1]) > arr[2] && (arr[0]+arr[2]) > arr[1] && (arr[2]+arr[1]) > arr[0]) {
        return true;
    } else {
        return false;
    }
}

function TrianguloAngulo(a, b, c) {
    var aux1 = -(2 * b * c);
    var aux2 = (a**2 - (b**2 + c**2));
    var cosseno = aux2  / (aux1);
    return (Math.acos(cosseno) * 180/Math.PI);
}

var lados = [];

for (i=1; i < 4; i++) {
    lados.push(parseInt(prompt(`Informe o tamanho do ${i}º lado: `)));
}

var anguloA = (TrianguloAngulo(lados[0], lados[1], lados[2]));
var anguloB = (TrianguloAngulo(lados[1], lados[2], lados[0]));
var anguloC = (TrianguloAngulo(lados[2], lados[0], lados[1]));

if (!validarTriangulo(lados)) {
    console.log('Não é triângulo!');
} else if (anguloA < 90 && anguloB < 90 && anguloC < 90) {
    console.log('Triângulo ACUTÂNGULO!');
} else if (anguloA == 90 | anguloB == 90 | anguloC == 90) {
    console.log('Triângulo RETÂNGULO!');
} else if (anguloA > 90 | anguloB > 90 | anguloC > 90) {
    console.log('Trinângulo OBTUSÂNGULO!');
}