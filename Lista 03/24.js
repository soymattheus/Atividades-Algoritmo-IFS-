/*24. Escrever um algoritmo que lê a hora de início de um jogo e a hora do final do
jogo (considerando apenas horas inteiras) e calcula a duração do jogo em horas,
sabendo-se que o tempo máximo de duração do jogo é de 24 horas e que o jogo
pode iniciar em um dia e terminar no dia seguinte.*/
const prompt = require('prompt-sync')();

var horaInicio = parseFloat(prompt('Insira a hora do início: '));
var horaFim = parseFloat(prompt('Informe a hora do término: '));

if (Number.isInteger(horaInicio) && Number.isInteger(horaFim) && horaInicio>=0 && horaInicio <=23 && horaFim>=0 && horaFim<=23) {
    if (horaInicio > horaFim) {
        console.log(`Duração: ${24-horaInicio+horaFim}:00 h`);
    } else {
        console.log(`Duração: ${Math.abs(horaInicio-horaFim)}:00 h`);
    }
    } else {
    console.log('Dado inválido!');
}