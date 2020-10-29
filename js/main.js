var swiper = new Swiper(".swiper-container", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

document.getElementsByClassName("swiper-container")[0].addEventListener("mouseover", function () {
  swiper.autoplay.stop();
});

document.getElementsByClassName("swiper-container")[0].addEventListener("mouseout", function () {
  swiper.autoplay.start();
});


var menuButton = document.querySelector('.menu-button');
var menu = document.querySelector('.header-wrapper')
menuButton.addEventListener('click', function () {
  menuButton.classList.toggle('menu-button-active');
  menu.classList.toggle('header-wrapper-active');
});