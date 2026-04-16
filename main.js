onload = () =>{
        document.body.classList.remove("container");
};
window.addEventListener('DOMContentLoaded', (event) => {
        console.log('La página se ha cargado completamente.');
        var audio = document.getElementById('audioPlayer');
        var playButton = document.getElementById('playAudio');
    
        playButton.addEventListener('click', function(event) {
            event.preventDefault(); // Evita que el enlace recargue la página
            audio.play();
        });
    });
    