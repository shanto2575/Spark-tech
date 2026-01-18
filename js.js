const slides = document.querySelectorAll(".hero-slide");
const slider = document.getElementById("heroSlider");
const prevBtn = document.getElementById("prevHero");
const nextBtn = document.getElementById("nextHero");

let currentIndex = 0;
let intervalId = null;
const delay = 3000;

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.remove("hidden");
        } else {
            slide.classList.add("hidden");
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

function startAutoPlay() {
    if (intervalId) return;
    intervalId = setInterval(nextSlide, delay);
}

function stopAutoPlay() {
    clearInterval(intervalId);
    intervalId = null;
}

// Arrow click
nextBtn.addEventListener("click", () => {
    stopAutoPlay();
    nextSlide();
    startAutoPlay();
});

prevBtn.addEventListener("click", () => {
    stopAutoPlay();
    prevSlide();
    startAutoPlay();
});

// Pause on hover
slider.addEventListener("mouseenter", stopAutoPlay);
slider.addEventListener("mouseleave", startAutoPlay);

// Init
showSlide(currentIndex);
startAutoPlay();

