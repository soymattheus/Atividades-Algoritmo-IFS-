/*28. Escrever um algoritmo que lê a hora de início e hora de término de um jogo,
ambas subdivididas em dois valores distintos : horas e minutos. Calcular e
escrever a duração do jogo, também em horas e minutos, considerando que o
tempo máximo de duração de um jogo é de 24 horas e que o jogo pode iniciar
em um dia e terminar no dia seguinte.*/
const propmt = require('prompt-sync')();

var horaInicio = propmt('Hora de início: [00:00]');
var horaFim = propmt('Hora de término: [00:00]');

var horasInicio = parseInt(horaInicio.slice(0,2))*60 + parseInt(horaInicio.slice(3,5));
var horasFim = parseInt(horaFim.slice(0,2))*60 + parseInt(horaFim.slice(3,5));

if (horasInicio < horasFim) {
    console.log(`${Math.trunc(Math.abs(horasInicio-horasFim)/60)}h${Math.trunc(Math.abs(horasInicio-horasFim)%60)}min`);
} else {
    console.log(`${Math.trunc(Math.abs(((24*60)-horasInicio)+horasFim)/60)}h${Math.trunc(Math.abs((24*60)-horasInicio)+horasFim)%60}min`);
}