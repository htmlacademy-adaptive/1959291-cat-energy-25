let page = document.querySelector('.page__body');
let navMainWrapper = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');

page.classList.remove('page__body--nojs');
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
