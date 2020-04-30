/*36)Ler dois números e armazená-los nas variáveis A e B. Fazer a troca dos
conteúdos das variáveis de tal maneira que a variável A fique com o valor da
variável B e vice-versa.*/
const prompt = require('prompt-sync')();

var a = parseFloat(prompt('Informe o valor de A: '));
var b = parseFloat(prompt('Informe o valor de B: '));
var aux = b;
b = a;
a = aux;
console.log('\nTROCANDO ...\n')
console.log('A: ' + a);
console.log('B: ' + b);