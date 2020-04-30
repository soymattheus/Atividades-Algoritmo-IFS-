/*26) Efetuar a leitura de cinco números inteiros e identificar o maior e o menor
valor*/
const prompt = require('prompt-sync')();
var num = [];
for (i=1; i < 6; i++) {
    num.push(parseInt(prompt(`Informe o ${i}º número: `)));
}
var menor = num[0];
var maior = num[0];

for (i=1; i < 6; i++) {
    if (num[i] < menor) {
        menor = num[i];
    }
    if (num[i] > maior) {
        maior = num[i];
    }
}

console.log('Menor: ' + menor);
console.log('Maior: ' + maior);