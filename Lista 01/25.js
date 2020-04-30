/*25) Entrar com três números e armazená-los em três variáveis com os seguintes
nomes: maior, intermediário e menor (suponha números diferentes).*/
const prompt = require('prompt-sync')();
var num = [];
for (i = 1; i < 4; i++) {
    num.push(parseFloat(prompt(`Inoforme o ${i}º número: `)));
}
var menor = num[0];
var intermediario = num[0];
var maior = num[0];


for (i = 1; i < 3; i++) {
    if (num[i] < menor) {
        menor = num[i];
    }
    if (num[i] > maior) {
        maior = num[i];
    }
    if ((num[i] > menor) && (num[i] < maior)) {
        intermediario = num[i];
    }
}

for (i = 1; i < 3; i++) {
    if ((num[i] > menor) && (num[i] < maior)) {
        intermediario = num[i];
    }
}


console.log('Menor: ' + menor);
console.log('Intermediário: ' + intermediario);
console.log('Maior: ' + maior);