/*7) Calcular os números inteiros de quatro algarismos que possuem a mesma
característica do número 3025.
30+25 = 55 e 55^2 = 3025
Dica: utilizar a função FRAC(n) que retorna a parte decimal de um número não
inteiro*/

var num = 0;
var numeros = [];
for (i=1000; i<10000; i++) {
    if (!(numeros.includes(i)) && (parseInt(String(i).slice(0,2)) + parseInt(String(i).slice(2,4)))**2 == parseInt(i)) {
        numeros.push(i);
    }
}
console.log('NNN: ' + numeros);