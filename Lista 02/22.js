/*22) Gerar a matriz transposta de uma matriz 5x5 dada pelo usuário (a transposta
é obtida permutando-se as linhas e as colunas de uma matriz).*/
const prompt = require('prompt-sync')();
const ls = 5;
var matriz = [[],[],[],[],[]];

//INICIALIZAÇÃO DA MATRIZ
console.clear();
console.log('Inicializando a matriz ...');
for (i=0; i<ls; i++) {
    for (j=0; j<ls; j++) {
        matriz[i][j] = 'X';
    }
}
console.table(matriz);
prompt('Pressione ENTER para continuar...');
console.clear();
console.table(matriz);

//INÍCIO DA INTERAÇÃO HOMEM/MÁQUINA
for (i=0; i<ls; i++) {
    for (j=0; j<ls; j++) {
        console.clear();
        console.table(matriz);
        matriz[i][j] = (prompt(`\nDigite o ${j+1}º valor da ${i+1} linha: `));
    }
}

console.clear();
console.table(matriz);

var novaMatriz = [[],[],[],[],[]];

//FORMANDO A MATRIZ TRANSPOSTA
var a = 0;
for (i=0; i<ls; i++) {
    for (j=0; j<ls; j++) {
        novaMatriz[j][i] = matriz[i][j];
    }
}

console.clear();
console.log('MATRIZ');
console.table(matriz);
console.log('MATRIZ TRANSPOSTA');
console.table(novaMatriz);