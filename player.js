/* player.js
   Gère les interactions audio
   (par exemple lecture, pause, plus tard: volume, avance, etc.)
*/


function playAudio(audioElement) {
  audioElement.play();
}

function pauseAudio(audioElement) {
  audioElement.pause();
  audioElement.currentTime=0;
}
