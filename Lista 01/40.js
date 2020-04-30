/*40) Ler 3 valores (variáveis a, b e c) e efetuar o cálculo da equação de segundo
grau, apresentando as raízes, se para os valores informados for possível efetuar o
referido cálculo.*/
const prompt = require('prompt-sync')();
var a = parseFloat(prompt('Informe o valor de A: '));
var b = parseFloat(prompt('Informe o valor de B: '));
var c = parseFloat(prompt('informe o valor de C: '));

var delta = (b**2) + (-4 * a * c);
if (delta < 0) {
    console.log('Não existe raiz real para delta menor que zero!\nS = {}');
} else {
    var x1 = (-b + Math.sqrt(delta)) / (2 * a);
    var x2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log(`S = {${x1}, ${x2}}`);
}