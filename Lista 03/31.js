/*31. Escrever um algoritmo que calcule os sucessivos valores de E usando a
série abaixo e considerando primeiro 3 termos, depois 4 termos e, por fim, 5
termos:
        E = 1 + 1 / 1! + 1 / 2! + 1 / 3! + 1 / 4!*/
const prompt = require('prompt-sync')();

for (num=3; num<=5; num++) {
        var fat = 1;
        for (i=2; i<=num; i++) {
                fat *= i;
        }
        console.log(`${num}! = ${fat}`);
}