/*8. Um sistema de equações lineares do tipo:
        ax + by = c
        dx + ey = f , pode ser resolvido segundo mostrado abaixo :
        
        x = (ce - bf) / (ae - bd)
        y = (af - cd) / (ae - bd)

Escreva um algoritmo que lê os coeficientes a,b,c,d,e e f e calcula e mostra os
valores de x e y.*/
const prompt = require('prompt-sync')();

var coeficientes = [];
for (i=0; i<6; i++) {
        coeficientes.push(parseFloat(prompt(`Informe o valor do ${i+1}º coeficiente: `)));
}

var x = (coeficientes[2]*coeficientes[4] - coeficientes[1]*coeficientes[5]) / (coeficientes[0]*coeficientes[4] / coeficientes[1]*coeficientes[3]);
var y = (coeficientes[0]*coeficientes[5] - coeficientes[2]*coeficientes[3]) / (coeficientes[0]*coeficientes[4] / coeficientes[1]*coeficientes[3]);

console.log(`X = ${x}\nY = ${y}`);