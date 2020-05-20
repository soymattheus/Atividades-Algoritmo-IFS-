/*30. O departamento que controla o índice de poluição do meio ambiente mantém
3 grupos de indústrias que são altamente poluentes do meio ambiente. O índice
de poluição aceitável varia de 0,05 até 0,25. Se o índice sobe para 0,3 as
indústrias do 1o grupo são intimadas a suspenderem suas atividades, se o
índice cresce para 0,4 as do 1o e 2o grupo são intimadas a suspenderem suas
atividades e se o índice atingir 0,5 todos os 3 grupos devem ser notificados a
paralisarem suas atividades. Escrever um algoritmo que lê o índice de poluição
medido e emite a notificação adequada aos diferentes grupos de empresas.*/

const prompt = require('prompt-sync')();

var poluicao = parseFloat(prompt('Informe o índice de poluíção: '));
poluicao = poluicao.toFixed(2);
if ((String(poluicao).length == 4) && (String(poluicao).slice(-2,String(poluicao).length)) % 5 == 0) {
    if (poluicao >= 0.05 && poluicao <= 0.25) {
        console.log('Todas as indústrias podem operar normalmente!')
    } else if (poluicao == 0.30 || poluicao == 0.35) {
        console.log('Nível de poluição: ' + poluicao + '\nAs indústrias do 1º grupo devem suspender as atividades.');
    } else if (poluicao == 0.40 || poluicao == 0.45) {
        console.log('Nível de poluição: ' + poluicao + '\nAs indústrias do 1º e 2º grupo devem suspender as atividades.');
    } else if (poluicao >= 0.50) {
        console.log('Nível de poluição: ' + poluicao + '\nAs indústrias do 1º, 2º e 3º grupo devem suspender as atividades.');
    } else {
        console.log('O dado inserido é inválido!');
    }
} else {
    console.log('O dado inserido é inválido!');
}