let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.dots-container');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

function updateSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });

    prevButton.style.display = index === 0 ? 'none' : 'block';
    nextButton.style.display = index === slides.length - 1 ? 'none' : 'block';

    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlide(currentIndex);
    }
}

function nextSlide() {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
        updateSlide(currentIndex);
    }
}

function createDots() {
    slides.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateSlide(currentIndex);
        });
        dotsContainer.appendChild(dot);
    });
}

createDots();
updateSlide(currentIndex);

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);