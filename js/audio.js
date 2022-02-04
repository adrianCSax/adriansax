const audios = [
    "../audios/Smoke_Jacket_Blues.mp3",
    "../audios/Till_I_Let_Go.mp3",
    "../audios/Modern_Attempt.mp3",
    "../audios/By_the_Fireplace.mp3"
];
var reproducir = new Audio();

function iniciar(){

    let main = document.getElementById('buttons');
    audios.forEach((audio, index) => {
        let button = document.createElement('button');
        button.id = index;
        button.className = "button margin-left-10 padding-10";
        button.innerHTML = audio.split('/')[2].split('.')[0].replace('_', ' ');
        button.addEventListener("click", () => {
                reproducir.src = audios[index];
                reproducir.play();
        }, false);
        main.appendChild(button);
    });
    
}

window.addEventListener("load", iniciar, false);