/*12) Calcular o número de grãos de milho que se pode colocar num tabuleiro de
xadrez, colocando 1 no primeiro quadro e nos quadros seguintes o dobro do
quadro anterior.*/
var graos = 2;
//var total = 0;
var aux = 0;
for (i=3; i<=65; i++) {
    aux = graos;
    graos = aux*2;
    //total += graos;
    console.log(aux);
}

console.log('Total de grãos: ' + (aux+1));