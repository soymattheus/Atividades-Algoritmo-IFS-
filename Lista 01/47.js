/*47)Um endocrinologista deseja controlar a saúde de seus pacientes e, para isto,
se utiliza do Índice de Massa Corporal (IMC) . Sabendo-se que o IMC é calculado
através da seguinte fórmula:
        PESO * (ALTURA^2)
Fazer um algoritmo que apresente o nome do paciente e sua faixa de risco,
baseando-se na seguinte tabela:
IMC FAIXA DE RISCO
abaixo de 20 abaixo do peso
a partir de 20 até 25 normal
a partir de 25 até 30 excesso de peso
a partir de 30 até 35 obesidade
acima de 35 obesidade mórbida */
const prompt = require('prompt-sync')();

var peso = parseFloat(prompt('Informe o peso: '));
var altura = parseFloat(prompt('Altura: '));
var imc = peso/(altura**2);
if (imc < 20) {
    console.log('Abaixo do Peso');
} else if (imc >= 20 && imc < 25) {
    console.log('Normal');
} else if (imc >= 25 && imc < 30) {
    console.log('Excesso de Peso');
} else if (imc >= 30 && imc < 35) {
    console.log('Obesidade');
} else {
    console.log('Obesidade Mórbida');
}