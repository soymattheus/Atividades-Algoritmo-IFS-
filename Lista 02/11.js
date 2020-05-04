/*11) Calcular o volume de uma esfera em função do raio R. O raio deverá variar
de 0 a 20 cm de 0,5 em 0,5 cm.

V = 4 x PI x R^3 / 3

*/
const prompt = require('prompt-sync')();

var raio = parseFloat(prompt('Informe o valor do raio: '));
raio = raio.toFixed(2);

if (String(raio).slice(-2,raio.length)%5==0 && raio >= 0 && raio <= 20) {
    console.log(((4*Math.PI*raio**3)/3).toFixed(2) + ' Cm^3!');
} else {
    console.log('Dados inválido!\nO raio deve variar de 0 a 20.');
}