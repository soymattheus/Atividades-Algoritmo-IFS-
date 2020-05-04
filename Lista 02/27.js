/*27) Uma matriz quadrada A, cujos elementos são designados por Ai,j, é dita
simétrica se Ai,j = Aj,i. Construir um algoritmo para ler uma matriz NxN do
usuário (onde o valor de N também é fornecido pelo usuário) e determinar se ela
é ou não simétrica.*/
const prompt = require('prompt-sync')();

//DEFINIR O TAMANHO DA MATRIZ
var matriz = [];
while (1) {
    console.clear();
    var tamanhoMatriz = parseFloat(prompt('Digite o tamanho da matriz: '));
    if (Number.isInteger(tamanhoMatriz) && tamanhoMatriz > 0) {
        for (i=0; i<tamanhoMatriz; i++) {
            matriz.push([]);
        }
        break;
    }
}

//INSERIR OS VALORES NA MATRIZ
for (i=0; i<tamanhoMatriz; i++) {
    for (j=0; j<tamanhoMatriz; j++) {
        console.clear();
        console.table(matriz);
        matriz[i].push(prompt(`Digite o ${j+1}º valor da ${i+1}ª linha: `));
    }
}

//TESTAR SE A MATRIZ É SIMÉTRICA
var teste = []; // SE RECEBER AOS MENOS UM ZERO, NÃO É SIMÉTRICA
for (i=0; i<tamanhoMatriz; i++) {
    for (j=1; j<tamanhoMatriz; j+=2) {
        if (matriz[i][j] == matriz[j][i]) {
            teste.push(1);
        } else {
            teste.push(0);
        }
    }
}

//PRINTA SE É OU NÃO SIMÉTRICA
console.clear();
if (teste.includes(0)) {
    console.log('Não Simétrica!');
} else {
    console.log('Simétrica!');
}
console.table(matriz);