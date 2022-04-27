let page = document.querySelector('.page__body');
let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');

page.classList.remove('nojs');

navToggle.onclick = function() {
  navMain.classList.toggle('main-nav--opened');
};
