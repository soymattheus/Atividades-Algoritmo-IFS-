/*24) Escreva um algoritmo que calcule a interseção (valores em comum) entre os
valores contidos em dois vetores V1 e V2 e armazene estes valores no vetor V3.*/
const prompt = require('prompt-sync')();

var v1 = [];
var v2 = [];
var v3 = [];

var cont = 1;
var resp = '';
console.clear();
while (1) {
    v1.push(parseFloat(prompt(`Insira o ${cont}º valor no V1: `)));
    resp = prompt('Deseja inserir mais algum valor ao vetor V1? [S/N] ');
    if (resp.toUpperCase() == 'S'){
        cont += 1;
    } else {
        break;
    }
}

cont = 1;
console.clear();
while (1) {
    v2.push(parseFloat(prompt(`Insira o ${cont}º valor no V2: `)));
    resp = prompt('Deseja inserir mais algum valor ao vetor V2? [S/N] ');
    if (resp.toUpperCase() == 'S'){
        cont += 1;
    } else {
        break;
    }
}

var maior = v1.length >= v2.length ? v1 : v2;
var menor = v1.length <= v2.length ? v1 : v2;
for (i=0; i<maior.length; i++) {
    if (maior.includes(menor[i])) {
        v3.push(menor[i]);
    }
}
console.clear();
console.log('V1: ' + v1);
console.log('V2: ' + v2);
console.log('V3: ' + v3);