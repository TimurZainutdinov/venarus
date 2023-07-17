// Menu
let menuBtn = document.querySelector('.navigation__menu--btn');
let menu = document.querySelector('.navigation__menu--content');
let navigationBuy = document.querySelector('.navigation__buy');

menuBtn.addEventListener('click', function() {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
  navigationBuy.classList.toggle('hide');
  document.body.classList.toggle('no-scroll');
});
// Carousel
const carousel = document.querySelector('.reliable-assistant__carousel');
const carouselItems = carousel.querySelectorAll('.reliable-assistant__carousel--item');
const forwardButton = document.querySelector('.reliable-assistant__carousel--forward-button');
const backwardButton = document.querySelector('.reliable-assistant__carousel--backward-button');

let currentIndex = 0;

function rotateCarouselForward() {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  rotateCarousel();
}

function rotateCarouselBackward() {
  currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  rotateCarousel();
}

function rotateCarousel() {
  const activeItem = carouselItems[currentIndex];
  const previousItem = carouselItems[(currentIndex - 1 + carouselItems.length) % carouselItems.length];
  const nextItem = carouselItems[(currentIndex + 1) % carouselItems.length];

  activeItem.classList.add('active');
  previousItem.classList.add('previous');
  nextItem.classList.add('next');

  setTimeout(() => {
    activeItem.classList.remove('previous', 'next');
    previousItem.classList.remove('active');
    nextItem.classList.remove('active');
  }, 500);
}

forwardButton.addEventListener('click', rotateCarouselForward);
backwardButton.addEventListener('click', rotateCarouselBackward);
// Close note
document.addEventListener("DOMContentLoaded", () => {
  const notice = document.querySelector(".reliable-assistant__notice");

  notice.addEventListener("click", () => {
    notice.remove();
  });
});