/**46)Fazer um algoritmo que leia um ângulo em graus e apresente:
·o seno do ângulo, se o ângulo pertencer a um quadrante par; e
·o co-seno do ângulo, se o ângulo pertencer a um quadrante ímpar.*/
const prompt = require('prompt-sync')();

var angulo = parseFloat(prompt('Informe o ângulo: '));
if (angulo >= 0 && angulo <= 90 || angulo > 180 && angulo <= 270) {
console.log('Cosseno: ' + Math.cos(angulo*Math.PI/180).toFixed(2));
}
if (angulo > 90 && angulo <=180 || angulo > 270 && angulo <= 360) {
console.log('Seno: ' + Math.sin(angulo*Math.PI/180).toFixed(2));
}