/*30) Entrar com dois nomes e imprimi-los em ordem alfabética.*/
const prompt = require('prompt-sync')();
var nomes = [];

for (i = 1; i < 3; i++) {
    nomes.push(prompt(`Inoforme o ${i}º nome: `));
}

var trocou = true;
while (trocou) {
    trocou = false;
    for (i = 0; i < nomes.length; i++) {
        if (nomes[i] > nomes[i+1]) {
            var aux = nomes[i+1];
            nomes[i+1] = nomes[i];
            nomes[i] = aux;
            trocou = true;
        }
    }
}

console.log(nomes);