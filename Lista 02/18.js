/*18) Fazer a função POW (base, expoente) que recebe base e expoente como
parâmetros e retorna o valor de base elevado a expoente. Se os valores de base
e expoente não forem inteiros a função deve retornar 0.*/
const prompt = require('prompt-sync')();

function POW(base,expoente){
    if (Number.isInteger(base) && Number.isInteger(expoente)) {
        if (expoente == 0) {
            return 1;
        } else {
            var resultado = base;
            for (i=1; i<expoente; i++) {
                resultado *= base;
            }
        }
        return resultado;
    } else {
        return 0;
    }
}

var base = parseFloat(prompt('Digite o valor da BASE: '));
var expoente = parseFloat(prompt('Digite o valor do EXPOENTE: '));

console.log(POW(base,expoente));