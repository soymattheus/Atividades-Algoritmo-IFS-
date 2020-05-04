/*13) Faça um algoritmo para ler um número natural N e calcular o maior número
primo menor do que o número N*/
const prompt = require('prompt-sync')();

function validaPrimo(numero) {
    let primo = true;
    for (i=2; i<numero; i++) {
        if (numero%i == 0) {
            primo = false;
            break;
        }
    }
    return primo;
}

var num = parseFloat(prompt('Digite um número: '));   
var primos = 0;
for (i=1;i<num;i++) {
    var primo = true;
    for (j=2; j<i; j++) {
        if (i%j == 0) {
            primo = false;
            
        }
    }

    if (primo) {
        primos = i;
    }
}

console.log('Número primo menor mais aproximado: ' + primos);
