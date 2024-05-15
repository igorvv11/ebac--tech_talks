AOS.init();

const dataDoEvento = new Date("jun 12, 2024 19:00:00");
const TimeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const TimeStampAtual = agora.getTime();

    const distanciaAteOEvento = TimeStampDoEvento - TimeStampAtual;

    const diasEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 *60;
    const minutosEmMs = 1000 * 60

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diasEmMs)
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diasEmMs) / horasEmMs)
    const minutosAateOEvento = Math.floor(diasAteOEvento % horasEmMs / minutosEmMs)
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutosEmMs) / 1000)
    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAateOEvento}m ${segundosAteOEvento}s`; 

    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado';
    }

}, 1000)