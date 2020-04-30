/*27) Ler três números e imprimir se eles podem ou não ser lados de um triângulo.*/
const prompt = require('prompt-sync')();
 var lados = [];

 for (i=1; i < 4; i++) {
     lados.push(parseInt(prompt(`Informe o tamanho do ${i}º lado: `)));
 }

 var menor = lados[0];
 var medio = lados[0];
 var maior = lados[0];

 for (i=1; i < 3; i++) {
     if (lados[i] > maior) {
         maior = lados[i];
     }
     if (lados[i] < menor) {
         menor = lados[i];
     }
 }

 for (i=1; i < 3; i++) {
     if (lados[i] > menor && lados[i] < maior) {
         medio = lados[i];
     }
 }

 if (menor + medio >= maior) {
     console.log('É triângulo!');
 } else {
     console.log('Não é triângulo!');
 }