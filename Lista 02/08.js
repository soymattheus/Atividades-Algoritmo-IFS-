/*8) Ler um número do usuário e determinar se ele é ou não primo.*/
const prompt = require('prompt-sync')();

var num = parseFloat(prompt('Calcular se o número é primo: '));
var primo = true;
for (i=2; i<num; i++) {
    if (Number.isInteger(num/i)) {
        primo = false;
        break;
    }
}

console.log(primo ? num + ' é primo!' : num + ' não é primo!');