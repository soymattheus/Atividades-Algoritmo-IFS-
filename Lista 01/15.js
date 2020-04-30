/*15) Entrar com divisor e dividendo e informar se o quociente é inteiro*/
const prompt = require('prompt-sync')();
var num1 = parseFloat(prompt('Informe o DIVISOR: '));
var num2 = parseFloat(prompt('Informe o DIVIDENDO: '));
if (Number.isInteger(num1/num2)) {
    console.log('O quociente é inteiro!');
} else {
    console.log('O quociente não é inteiro!');
}