/*9) Calcular a soma da seguinte série de 100 termos:
1 – 1/2 + 1/4 - 1/6 + 1/8 –1/10 + 1/12...*/
const prompt = require('prompt-sync')();

var cont = 2;
var total = 0;
for (i=0; i<100; i++) {
    if (i%2 == 0){
        total += 1/cont;
        cont += 2;
    } else {
        total -= 1/cont;
        cont += 2;
    }
}

console.log('Resultado: ' + (1 - total).toFixed(4));