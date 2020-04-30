/*24) Entrar com três números e imprimi-los em ordem decrescente (suponha
números diferentes).*/
const prompt = require('prompt-sync')();
function bubbleSort(arr) {
    var trocou = true;
    while (trocou) {
        trocou = false;
        for (i = 0; i < arr.length; i++) {
            if (arr[i] < arr[i + 1]) {
                var aux = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = aux;
                trocou = true;
            }
        }
    }
    return arr;
}

var num = [];
for (i = 1; i < 4; i++) {
    num.push(parseFloat(prompt(`Informe o ${i}º número: `)));
}
console.log(bubbleSort(num));