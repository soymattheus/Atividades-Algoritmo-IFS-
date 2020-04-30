/*6)Entrar com um número e informar se ele é divisível por 10, ou é divisível por 5,
ou é divisível por 2 ou se não é
divisível por nenhum destes*/
const prompt = require('prompt-sync')();

function divisivel (arr1, arr2) {
    if (Number.isInteger(arr1/arr2)) {
        return true;
    } else {
        return false;
    }
}

var num = parseInt(prompt('Informe o número:'));
console.log('Divisível por 10: ' + divisivel(num,10));
console.log('Divisível por 5: ' + divisivel(num,5));
console.log('Divisível por 2: ' + divisivel(num,2));
