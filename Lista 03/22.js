/*22. Uma empresa concederá um aumento de salário aos seus funcionários, variável de
acordo com o cargo, conforme a tabela abaixo. Faça um algoritmo que leia o salário e o
cargo de um funcionário e calcule o novo salário. Se o cargo do funcionário não estiver
na tabela, ele deverá, então, receber 40% de aumento. Mostre o salário antigo, o novo
salário e a diferença.

Código  Cargo       Percentual
101     Gerente     10%
102     Engenheiro  20%
103     Técnico     30%*/
const prompt = require('prompt-sync')();

while (1) {
    console.clear();
    var salario = parseFloat(prompt('Informe o salário: '));
    if (!(Number.isNaN(salario)) && salario >= 0) {
        var cargo = prompt('Informe o código do cargo: ');
        switch (cargo) {
            case '101':
                console.log(`Cargo: Gerente\nSalário antigo: R$ ${salario.toFixed(2)}\nSalário novo: R$ ${(salario+salario*0.1).toFixed(2)}\nDiferença: R$ ${((salario+salario*0.1) - salario).toFixed(2)}`);
                break;
            case '102':
                console.log(`Cargo: Engenheiro\nSalário antigo: R$ ${salario.toFixed(2)}\nSalário novo: R$ ${(salario+salario*0.2).toFixed(2)}\nDiferença: R$ ${((salario+salario*0.2) - salario).toFixed(2)}`);
                break;
            case '103':
                console.log(`Cargo: Técnico\nSalário antigo: R$ ${salario.toFixed(2)}\nSalário novo: R$ ${(salario+salario*0.3).toFixed(2)}\nDiferença: R$ ${((salario+salario*0.3) - salario).toFixed(2)}`);
                break;
            default:
                console.log(`Cargo: Não Cadastrado\nSalário antigo: R$ ${salario.toFixed(2)}\nSalário novo: R$ ${(salario+salario*0.4).toFixed(2)}\nDiferença: R$ ${((salario+salario*0.4) - salario).toFixed(2)}`);
            }
        break;
    } else {
        prompt('Salário inválido!\nPressione ENTER para continuar...');
        console.clear();
    }
}