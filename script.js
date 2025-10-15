const imageCount = 7; // Número total de imágenes
const imageFolder = 'images/';
const carouselContainer = document.querySelector('.carousel-images');

for (let i = 0; i < imageCount; i++) {
  const img = document.createElement('img');
  img.src = `${imageFolder}img${i + 1}.jpg`;
  img.classList.add('carousel-img');
  if (i === 0) img.classList.add('active');
  carouselContainer.appendChild(img);
}

const images = document.querySelectorAll('.carousel-img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let index = 0;

function showImage(i) {
  images.forEach(img => img.classList.remove('active'));
  images[i].classList.add('active');
}

prevBtn.addEventListener('click', () => {
  index = (index > 0) ? index - 1 : images.length - 1;
  showImage(index);
});

nextBtn.addEventListener('click', () => {
  index = (index < images.length - 1) ? index + 1 : 0;
  showImage(index);
});
