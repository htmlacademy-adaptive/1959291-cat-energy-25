// let page = document.querySelector('.page__body');
let page = document.getElementsByTagName('body') [0];
let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');

page.classList.remove('nojs');

navToggle.onclick = function() {
  navMain.classList.toggle('main-nav--opened');
};
