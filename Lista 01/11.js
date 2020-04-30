/*11) Entrar com um número e informe se sua raiz quadrada é inteira*/
const prompt = require('prompt-sync')();
var num = parseInt(prompt('Informe um número: '));
if (Number.isInteger(Math.sqrt(num))) {
    console.log('O número digitado possui raiz quadrada inteira.');
} else {
    console.log('O número digitado não possui raiz quadrada inteira.');
}