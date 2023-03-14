const slider = document.querySelector('.slider');
const sliderContainer = slider.querySelector('.slider-container');
const slides = slider.querySelectorAll('.slide');
const prevButton = slider.querySelector('.prev-button');
const nextButton = slider.querySelector('.next-button');
const navButtons = slider.querySelectorAll('.nav-button');

let slideIndex = 0;
let slideWidth = slides[0].offsetWidth;
const slideMargin = 20;
const slideCount = slides.length;
const containerWidth = slideWidth * slideCount + slideMargin * (slideCount - 1);
sliderContainer.style.width = containerWidth + 'px';

prevButton.addEventListener('click', () => {
  if (slideIndex > 0) {
    slideIndex--;
    sliderContainer.style.transform = `translateX(-${slideIndex * (slideWidth + slideMargin)}px)`;
  } else {
    slideIndex = slideCount - 1;
    sliderContainer.style.transform = `translateX(-${slideIndex * (slideWidth + slideMargin)}px)`;
  }
  setActiveNavButton();
});

nextButton.addEventListener('click', () => {
  if (slideIndex < slideCount - 1) {
    slideIndex++;
    sliderContainer.style.transform = `translateX(-${slideIndex * (slideWidth + slideMargin)}px)`;
  } else {
    slideIndex = 0;
    sliderContainer.style
