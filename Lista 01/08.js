/*8)Entrar com um número e imprimir a raiz quadrada do número caso ele seja
positivo e o quadrado do número caso ele seja negativo.*/
const prompt = require('prompt-sync')();
var num = parseInt(prompt('Digite um número: '));
if (num >= 0) {
    console.log('Raiz quadrada de ' + num + ': ' + Math.sqrt(num));
} else {
    console.log('(' + num + ') ao quadrado: -' + (num)**2);
    /*
    Outra forma de fazer
    console.log('(' + num + ') ao quadrado: -' + Math.pow(num,2));
    */
}