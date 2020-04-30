/*52)Ler uma palavra e se ela começar pela letra L ou D (também deve ser
considerado l ou d) e formar uma nova palavra que terá os dois primeiros
caracteres e o último; caso contrário a nova palavra será formada pelo
por todos os caracteres menos o primeiro.*/
const prompt = require('prompt-sync')();

var palavra = prompt('Digite uma palavra: ');
var nova_palavra = '';
if (palavra.slice(0,1).toUpperCase() == 'L' || palavra.slice(0,1).toUpperCase() == 'D') {
    for (i=0; i < palavra.length; i++) {
        if (i == 0 || i == 1 || i == palavra.length-1) {
            nova_palavra += palavra.slice(i,i+1);
        }
    }
    console.log('Nova palavra: ' + nova_palavra);
} else {
    for (i=1; i < palavra.length; i++) {
            nova_palavra += palavra.slice(i,i+1);
    }
    console.log('Nova palavra: ' + nova_palavra);
}