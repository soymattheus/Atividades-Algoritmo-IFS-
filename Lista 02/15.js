/*15) Inverter os caracteres contidos em um literal (observação: só é permitido
usar as funções LEN, INI e FIM passadas em sala de aula)*/
const prompt = require('prompt-sync')();

var nome = prompt('Nome: ');
var novoNome = '';
for (i=nome.length; i>0; i--) {
    novoNome += (nome.slice(i-1,i));
}
console.log(novoNome);