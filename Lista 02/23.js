/*23) Queremos efetuar a compactação de um vetor V1 de N algarismos 0 e 1
(N<=40) digitado pelo usuário (onde cada algarismo ocupa uma posição do
vetor) , de forma que o vetor resultante V2 de N elementos (N<=40) possua
menos elementos do que o vetor original. A regra de compactação é a seguinte:

a) o primeiro elemento do vetor V2 é o número de algarismos zero que o vetor
V1 contém, a partir do seu início, até o primeiro algarismo um;

b) o próximo elemento do vetor V2 é o número de algarismos um que o vetor V1
contém, a partir do último zero encontrado, até o próximo algarismo zero;

c) o próximo elemento do vetor V2 é o número de algarismos zero que o vetor
V1 contém, a partir do último um encontrado, até o próximo algarismo um;

d) repete-se os passos b) e c) até o final do vetor V1.
Exemplo: para o vetor digitado V1 = (0,0,0,1,1,0,1,0,1,1,0)
obtém-se V2 = (3,2,1,1,1,2,1)
Fazer o algoritmo para efetuar esta compactação, recebendo o valor de N e o
vetor V1 do usuário e testando se os algarismos digitados são somente 0’s e 1’s.*/
const prompt = require('prompt-sync')();
var vetor = [];
var i = 1;
while(1) {
    console.clear();
    var num = parseFloat(prompt(`Insira o ${i}º valor: `));
    if (Number.isInteger(num) && num==0 || num==1) {
        vetor.push(num);
        i += 1;
        console.clear();
        var resp = prompt('Deseja adicionar outro número:(S/N) [N]');
        if (resp.toUpperCase()!='S') {
            break;
        }
    } else {
        console.clear();
        prompt('Dados inválido!\nDigite 0 ou 1.\nPressione ENTER para continuar...');
        console.clear();
    }
}
var novoVetor = [];
var numAtual = vetor[0];
var contador = 1;
for (i=1; i<vetor.length; i++) {
    if (numAtual==vetor[i]) {
        contador += 1;
    } else {
        var aux = contador;
        novoVetor.push(contador);
        numAtual = vetor[i];
        contador = 1;
    }
}
novoVetor.push(aux-1);

console.clear();
console.log('Vetor: ' + vetor);
console.log('Vetor Compactado: ' + novoVetor);