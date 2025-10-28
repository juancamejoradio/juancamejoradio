const audio = document.getElementById('audioPlayer');
const playPauseBtn = document.getElementById('playPause');

playPauseBtn.addEventListener('click', () => {
  const isPaused = audio.paused;
  isPaused ? audio.play() : audio.pause();
  playPauseBtn.textContent = isPaused ? '⏸️' : '▶️';
});

const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 0;

function showSlide(i) {
  index = (i + images.length) % images.length;
  carousel.style.transform = `translateX(-${index * 100}%)`;
}

prevBtn.addEventListener('click', () => showSlide(index - 1));
nextBtn.addEventListener('click', () => showSlide(index + 1));


