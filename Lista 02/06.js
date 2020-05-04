/*6) Escrever os N primeiros números da série de Fibonacci, onde N é um valor
lido do usuário.
Série de Fibonacci: n1, n2, n3, ..., nm onde
ni = 1, para i <=2
ni = ni-2 + ni-1 , para i >2*/
const prompt = require('prompt-sync')();

var qtd = parseInt(prompt('Quantidade de números que devem ser exibidos na sequência: '));
if ( qtd == 0) {
    console.log('Sem númeors para serem exibidos.');
} else if (qtd == 1) {
    console.log('1');
} else if (qtd == 2) {
    console.log('1 - 1');
} else if (qtd == 3) {
    console.log('1 - 1 - 2');
} else if (qtd > 3) {
    var sequencia = '1 - 1 - 2';
    var a = 1;
    var b = 2;
    var aux = 0;
    for (i=4; i <= qtd; i++) {
        sequencia += (' - ' + (a+b));
        aux = a;
        a = b;
        b = aux+b;
    }
    console.log(sequencia);
} else {
    console.log('Dados inválido!');
}