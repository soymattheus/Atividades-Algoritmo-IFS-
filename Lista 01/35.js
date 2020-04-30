/*35) Entrar com nome, sexo e idade de uma pessoa. Se a pessoa for do sexo
feminino e tiver menos que 25 anos então
imprimir nome e a mensagem: ACEITA, caso contrário, imprimir nome e a
mensagem: NÃO ACEITA.(considerar f e F)*/
const prompt = require('prompt-sync')();

function validaSexo(sexo) {
    if (sexo.toUpperCase() == 'M' || sexo.toUpperCase() == 'F') {
        return true;
    } else {
        return false;
    }
}

var nome = prompt('Informe o nome: ');
var sexo = prompt('Informe o sexo: [M/F] ');
var idade = parseFloat(prompt('Informe a idade: '));

var validaIdade = (Number.isInteger(idade));

if (validaIdade && validaSexo(sexo)) {
    if (sexo.toLocaleUpperCase() == 'F' && idade < 25) {
        console.log(nome + '\nACEITA!');
    } else {
        console.log( nome + '\nNÃO ACEITA!');
    }
} else {
    console.log('Digite os dados corretamente!');
}