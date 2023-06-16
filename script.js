const previousBtn = document.getElementById('previous-btn');
const nextBtn = document.getElementById('next-btn');
const likeBtn = document.getElementById('like-btn');
const dislikeBtn = document.getElementById('dislike-btn');
const likeCount = document.getElementById('like-count');
const dislikeCount = document.getElementById('dislike-count');
const downloadBtn = document.getElementById('download-btn');
const slides = document.querySelectorAll('.slide');

let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

function updateCounter(element, count) {
  element.textContent = count;
}

function previousSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  showSlide(currentIndex);
}

function nextSlide() {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
}

function increaseCount(element) {
  const count = parseInt(element.textContent);
  element.textContent = count + 1;
}

function downloadImage() {
  const currentSlide = slides[currentIndex];
  const imageSource = currentSlide.getAttribute('src');
  const link = document.createElement('a');
  link.href = imageSource;
  link.download = 'imagen.jpg';
  link.click();
}

previousBtn.addEventListener('click', previousSlide);
nextBtn.addEventListener('click', nextSlide);
likeBtn.addEventListener('click', () => increaseCount(likeCount));
dislikeBtn.addEventListener('click', () => increaseCount(dislikeCount));
downloadBtn.addEventListener('click', downloadImage);

showSlide(currentIndex);
