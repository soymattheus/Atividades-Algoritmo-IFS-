/*31) Entrar com o salário de uma pessoa e imprimir o desconto do INSS segundo
a tabela abaixo:
- menor ou igual a R$ 600,00 - isento
- maior que R$ 600,00 e menor ou igual a R$ 1200,00 - 20%
- maior que R$ 1200,00 e menor ou igual a R$2000,00 - 25%
- maior que R$ 2000,00 - 30% */
const prompt = require('prompt-sync')();

function calDesconto(valor, porcentagem) {
    return valor * porcentagem;
}

var salario = parseFloat(prompt('Informe o salário: R$'));
if (salario > 0 && salario <= 600) {
    console.log('Pessoa isenta do pagamento do INSS.');
} else if (salario > 600 && salario <= 1200) {
    console.log(`O desconto do INSS é de R$${calDesconto(salario,0.2)}`);
} else if (salario > 1200 && salario <= 2000) {
    console.log(`O desconto do INSS é de R$${calDesconto(salario,0.25)}`);
} else if (salario > 2000) {
    console.log(`O desconto do INSS é de R$${calDesconto(salario,0.3)}`);
} else {
    console.log('O valor digitado deve ser positivo!');
}