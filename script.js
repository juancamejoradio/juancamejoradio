const audio = document.getElementById('audioPlayer');
const playPauseBtn = document.getElementById('playPause');

playPauseBtn.addEventListener('click', () => {
  const isPaused = audio.paused;
  isPaused ? audio.play() : audio.pause();
  playPauseBtn.textContent = isPaused ? '⏸️' : '▶️';
});

