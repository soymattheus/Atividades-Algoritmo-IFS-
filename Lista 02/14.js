/*14) Fazer um algoritmo que receba um número inteiro positivo N do usuário e
mostre o valor do seu fatorial. Se o usuário não digitar um número inteiro
positivo deve ser mostrada uma mensagem de erro e pedir para que ele digite
novamente.*/
const prompt = require('prompt-sync')();
console.clear();
while (1) {
    var num = parseFloat(prompt('Digite um número inteiro positivo: '));
    if (Number.isInteger(num) && num > 0) {
        var fatorial = 1
        for (i=2; i<=num; i++) {
            fatorial *= i;
        }
        console.log(num + '!: ' + fatorial);
        break;
    } else {
        prompt('Número inválido!\nPressione ENTER para continuar...');
        console.clear();
    }
}