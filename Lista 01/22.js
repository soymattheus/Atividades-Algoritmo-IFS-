/*22) Entrar com três números e armazenar o maior número na variável de nome
maior (suponha números diferentes).*/
const prompt = require('prompt-sync')();
var num = [];
for (i=0; i<3; i++) {
    num.push(parseFloat(prompt(`Informe o ${i+1}º número: `)));
}
var maior = num[0];
for (i=1; i<num.length; i++) {
    if (num[i] > maior) {
        maior = num[i];
    }
}

console.log(maior);