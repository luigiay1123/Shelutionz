const burgerMenu = document.querySelector('.burgerMenu');

const offScreenMenu = document.querySelector('.off-screen-menu');

const closeImage = document.querySelector('.closeImage');

burgerMenu.addEventListener("click", ()=>{
  offScreenMenu.classList.toggle('visible');
});

closeImage.addEventListener("click", ()=>{
  offScreenMenu.classList.toggle('visible');
});

const track = document.querySelector(".portfolioSamples");
const prevBtn = document.querySelector(".backBtn");
const nextBtn = document.querySelector(".nextBtn");
const slides = document.querySelectorAll(".portfolioImage");

let index = 0;
let slideWidth = document.querySelector(".portfolioWrapper").offsetWidth;
const totalSlides = slides.length;

function updateCarousel() {
    slideWidth = document.querySelector(".portfolioWrapper").offsetWidth;
    track.style.transform = `translateX(-${index * slideWidth}px)`;
    prevBtn.classList.toggle("is-hidden", index === 0);
    nextBtn.classList.toggle("is-hidden", index === totalSlides - 1);
    console.log(index);
}

prevBtn.addEventListener("click", () => {
    if (index > 0) {
        index--;
        updateCarousel();
    }
});

nextBtn.addEventListener("click", () => {
    if (index < totalSlides - 1) {
        index++;
        updateCarousel();
    }
});

window.addEventListener("resize", updateCarousel);
updateCarousel();
// console.log(index);

