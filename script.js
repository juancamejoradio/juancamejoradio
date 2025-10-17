// 📸 Carrusel de imágenes
const imageCount = 7;
const imageFolder = 'images/';
const carouselContainer = document.querySelector('.carousel-images');

for (let i = 0; i < imageCount; i++) {
  const img = document.createElement('img');
  img.src = `${imageFolder}img${i + 1}.jpg`;
  img.className = 'carousel-img' + (i === 0 ? ' active' : '');
  carouselContainer.appendChild(img);
}

const images = document.querySelectorAll('.carousel-img');
let index = 0;

function showImage(i) {
  images.forEach(img => img.classList.remove('active'));
  images[i].classList.add('active');
}

document.querySelector('.prev').addEventListener('click', () => {
  index = (index - 1 + images.length) % images.length;
  showImage(index);
});

document.querySelector('.next').addEventListener('click', () => {
  index = (index + 1) % images.length;
  showImage(index);
});

// ℹ️ Toggle de caja de información
const toggleBtn = document.getElementById('a');
const infoBox = document.getElementById('info-box');

toggleBtn.addEventListener('click', () => {
  infoBox.style.display = (infoBox.style.display === 'flex') ? 'none' : 'flex';
});

// 🔊 Reproductor de audio
const audio = document.getElementById('audioPlayer');
const playPauseBtn = document.getElementById('playPause');

playPauseBtn.addEventListener('click', () => {
  const isPaused = audio.paused;
  isPaused ? audio.play() : audio.pause();
  playPauseBtn.textContent = isPaused ? '⏸️' : '▶️';
});
