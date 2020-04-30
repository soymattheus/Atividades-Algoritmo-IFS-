/*53)Faça um algoritmo que informe a quantidade total de calorias da refeição a
partir da escolha do usuário que deverá
informar o prato, a sobremesa e bebida (veja a tabela abaixo)
PRATO               SOBREMESA               BEBIDA
Vegetariano 180cal  Abacaxi 75cal           Chá 20cal
Peixe 230cal        Sorvete diet 110cal     Suco de laranja 70cal
Frango 250cal       Mousse diet 170cal      Suco de melão 100cal
Carne 350cal        Mousse chacolate 200cal  Refrigerante diet 65cal*/
const prompt = require('prompt-sync')();
console.clear();

function cardapio () {
    console.log('***********************************************************************\n                             CARDÁPIO\n***********************************************************************\nPRATO               SOBREMESA               BEBIDA\nVegetariano 180cal  Abacaxi 75cal           Chá 20cal\nPeixe 230cal        Sorvete diet 110cal     Suco de laranja 70cal\nFrango 250cal       Mousse diet 170cal      Suco de melão 100cal\nCarne 350cal        Mousse chacolate 200cal  Refrigerante diet 65cal\n***********************************************************************');
}

var pratoCal = 0;
while (1) {
    cardapio();
    var prato = prompt('Escolha o prato: ');
    if (prato.toUpperCase() == 'VEGETARIANO') {
            pratoCal = 180;
            break;
    } else if (prato.toUpperCase() == 'PEIXE') {
        pratoCal = 230;
        break;
    } else if (prato.toUpperCase() == 'FRANGO') {
            pratoCal = 250;
            break;
    } else if (prato.toUpperCase() == 'CARNE') {
            pratoCal = 350;
            break;
    } else {
            console.clear();
            prompt('Prato não disponível no cardápio.\nPressione ENTER para continuar...');
            console.clear();
    }
}

var sobremesaCal = 0;
while (1) {
    console.clear();
    console.log('Prato escolhido: ' + prato);
    cardapio();
    var sobremesa = prompt('Escolha a sobremesa: ');
    if (sobremesa.toUpperCase() == 'ABACAXI') {
        sobremesaCal = 75;
        break;
    } else if (sobremesa.toUpperCase() == 'SORVETE DIET') {
        sobremesaCal = 110;
        break;
    } else if (sobremesa.toUpperCase() == 'MOUSSE DIET'){
        sobremesaCal = 170;
        break;
    } else if (sobremesa.toUpperCase() == 'MOUSSE CHOCOLATE'){
        sobremesaCal = 200;
        break;
    } else {
        console.clear();
        prompt('Sobremesa não disponível no cardápio.\nPressione ENTER para continuar...');
        console.clear();
    }
}

var bebidaCal = 0;
while (1) {
    console.clear();
    console.log('Prato escolhido: ' + prato + '\nSobremesa escolhida: ' + sobremesa);
    cardapio();
    var bebida = prompt('Escolha a bebida: ');
    if (bebida.toUpperCase() == 'CHÁ') {
        bebidaCal = 20;
        break;
    } else if (bebida.toUpperCase() == 'SUCO DE LARANJA') {
        bebidaCal = 70;
        break;
    } else if (bebida.toUpperCase() == 'SUCO  DE MELÃO') {
        bebidaCal = 100;
        break;
    } else if (bebida.toUpperCase() == 'REFRIGERANTE DIET') {
        bebidaCal = 65;
        break;
    } else {
        console.clear();
        prompt('Bebida não disponível no cardápio.\nPressione ENTER para continuar...');
        console.clear();
    }
}

console.clear();
console.log('Prato escolhido: ' + prato + '\nSobremesa escolhida: ' + sobremesa + '\nBebida escolhida: ' + bebida);
console.log('Total de calorias: ' + (pratoCal + sobremesaCal + bebidaCal));