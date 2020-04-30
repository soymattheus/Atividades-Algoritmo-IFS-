/*39) Ler um número e imprimir se ele é igual a 5, ou se é igual a 200, ou se é
igual a 400, ou se ele está no intervalo
entre 500 e 1000, ou se ele está fora dos escopos anteriores.*/
const prompt = require('prompt-sync')();
 var num = parseFloat(prompt('Informe o número: '));
  if (num == 5) {
      console.log('Número é igual a 5!');
  } else if (num == 200) {
      console.log('Número é igual a 200!');
  } else if (num == 400) {
      console.log('Número é igual a 400!');
  } else if (num > 500 && num < 1000) {
      console.log('Número entre 500 e 1000!');
  } else {
      console.log('Número não está em nenhum dos escopos!');
  }