/*48)Faça um algoritmo que a partir da idade e peso do paciente calcule a
dosagem de determinado medicamento e imprima a receita informando quantas
gotas do medicamento o paciente deve tomar por dose. Considere que o
medicamento em questão possui 500 mg por ml, e que cada ml corresponde a
20 gotas.

- Adultos ou adolescentes desde 12 anos, inclusive, se possuírem peso igual ou
acima de 60 quilos devem tomar 1000 mg , com peso abaixo de 60 quilos devem tomar 875 mg.

- Para crianças e adolescentes abaixo de 12 anos a dosagem á calculada pelo
peso corpóreo conforme tabela abaixo:
5 kg a 9 kg = 125 mg 24.1 kg a 30 kg = 500 mg
9.1 kg a 16 kg = 250 mg acima de 30 kg = 750 mg
16.1 kg a 24 kg = 375 mg */
const prompt = require('prompt-sync')();

var idade = parseInt(prompt('Informe a idade: '));
var peso = parseFloat(prompt('Informe o peso: '));

var mg_gota = 500/20; //mg por gota
console.log(mg_gota);

if (idade > 12) {
    if (peso > 60) {
        console.log(`Dosagem: ${1000/mg_gota} gotas.`);
    } else {
        console.log(`Dosagem: ${875/mg_gota} gotas.`);
    }
} else {
    if (peso >= 5 && peso <= 9) {
        console.log(`Dosagem: ${125/mg_gota} gotas.`);
    } else if (peso > 9 && peso <= 16) {
        console.log(`Dosagem: ${250/mg_gota} gotas.`);
    } else if (peso > 16 && peso <= 24) {
        console.log(`Dosagem: ${375/mg_gota} gotas.`);
    } else if (peso > 24 && peso <= 30) {
        console.log(`Dosagem: ${500/mg_gota} gotas.`);
    } else if (peso > 30) {
        console.log(`Dosagem: ${750/mg_gota} gotas.`);
    } else {
        console.log('Não deve tomar esse remédio!');
    }
}