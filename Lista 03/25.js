/*25. Escrever um algoritmo que lê um conjunto de 4 valores i, a, b, c, onde i é um
valor inteiro e positivo e a, b, c, são quaisquer valores reais e os escreva. A
seguir:
a) Se i=1 escrever os três valores a, b, c em ordem crescente.
b) Se i=2 escrever os três valores a, b, c em ordem decrescente.
c) Se i=3 escrever os três valores a, b, c de forma que o maior entre a, b,
c fique dentre os dois.*/
const prompt = require('prompt-sync')();

function crescente (arr) {
    var trocou = true;
    while (trocou) {
        trocou = false;
        for (i=0; i<3; i++) {
            if (arr[i] > arr[i+1]) {
                var aux = arr[i+1];
                arr[i+1] = arr[i];
                arr[i] = aux;
                trocou = true;
            }
        }
    }
    return arr;
}

function decrescente (arr) {
    var trocou = true;
    while (trocou) {
        trocou = false;
        for (i=0; i<3; i++) {
            if (arr[i] < arr[i+1]) {
                var aux = arr[i+1];
                arr[i+1] = arr[i];
                arr[i] = aux;
                trocou = true;
            }
        }
    }
    return arr;
}

var i = parseFloat(prompt('Escolha uma opção: '));
if (i == 1 || i == 2 || i== 3) {
    var a = parseFloat(prompt('Digite o valor de A: '));
    var b = parseFloat(prompt('Digite o valor de B: '));
    var c = parseFloat(prompt('Digite o valor de C: '));
    var numeros = [a,b,c];
    switch (i) {
        case 1:
            console.log(crescente(numeros));
            break;
        case 2:
            console.log(decrescente(numeros));
            break;
        case 3:
            numeros = crescente(numeros);
            console.log(numeros[0],numeros[2],numeros[1]);
            break;
    }
} else {
    console.log('Dado inválido!');
}