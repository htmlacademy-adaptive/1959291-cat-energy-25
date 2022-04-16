let headerMain = document.querySelector('.main-header');
let navMainWrapper = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');

headerMain.classList.remove('main-header--nojs');
navMainWrapper.classList.remove('main-nav--opened');
navMainWrapper.classList.add('main-nav--closed');

navToggle.addEventListener('click', function () {
  if (navMainWrapper.classList.contains('main-nav--closed')) {
    navMainWrapper.classList.remove('main-nav--closed');
    navMainWrapper.classList.add('main-nav--opened');
  } else {
    navMainWrapper.classList.add('main-nav--closed');
    navMainWrapper.classList.remove('main-nav--opened');
  }
});
