function accionPlay() {
    if (!medio.paused && !medio.ended) {
        medio.pause();
        play.value = '\u25BA'; //\u25BA
        play.backgroundColor = '#fff';
    } else {
        medio.play();
        play.value = '||';
        play.backgroundColor = 'grey';
    }
}

function accionReiniciar() {
    medio.currentTime = 0;
    if (medio.paused || medio.ended) {
        medio.play();
        play.value = '||';
        play.backgroundColor = 'grey';
    }
}

function accionRetrasar() {
    if (medio.currentTime > 5) {
        medio.currentTime = medio.currentTime - 5;
    } else {
        medio.currentTime = 0;
    }
}

function accionAdelantar() {
    if ((medio.currentTime + 5) < medio.duration) {
        medio.currentTime = medio.currentTime + 5;
    } else {
        medio.currentTime = medio.duration;
    }	
}

function accionSilenciar() {
    if (medio.muted) {
        medio.muted = false;
        silenciar.value = 'silenciar';
    } else {
        medio.muted = true;
        silenciar.value = 'sonido';
    }
}

function accionMasVolumen() {
    if (medio.volume < 1) {
        medio.volume = medio.volume + 0.1;
        changeVolumeValue();
    }
}

function accionMenosVolumen() {
    if (medio.volume > 0) {
        medio.volume = medio.volume - 0.1;
        changeVolumeValue();
    }
}

function changeVolumeValue() {
    volumen.innerHTML = Math.floor(medio.volume * 10);
}

function iniciar() {

    medio = document.getElementById('medio');
    let play = document.getElementById('play');
    let reiniciar = document.getElementById('reiniciar');
    let retrasar = document.getElementById('retrasar');
    let adelantar = document.getElementById('adelantar');
    let silenciar = document.getElementById('silenciar');
    volumen = document.getElementById('vol');
    volumen.innerHTML = medio.volume * 10;

    play.addEventListener('click', accionPlay);
    reiniciar.addEventListener('click', accionReiniciar);
    retrasar.addEventListener('click', accionRetrasar);
    adelantar.addEventListener('click', accionAdelantar);
    silenciar.addEventListener('click', accionSilenciar);
    menosVolumen.addEventListener('click', accionMenosVolumen);
    masVolumen.addEventListener('click', accionMasVolumen);
}

window.addEventListener('load', iniciar, false);