const pageHeader = document.querySelector('.page-header');
const burger = document.querySelector('.page-header__burger');

pageHeader.classList.remove('page-header--nojs');

burger.addEventListener('click', function() {
  if (pageHeader.classList.contains('page-header--closed')) {
    pageHeader.classList.remove('page-header--closed');
    pageHeader.classList.add('page-header--opened');
    burger.classList.remove('page-header__burger--closed');
    burger.classList.add('page-header__burger--opened');
  } else {
    pageHeader.classList.add('page-header--closed');
    pageHeader.classList.remove('page-header--opened');
    burger.classList.add('page-header__burger--closed');
    burger.classList.remove('page-header__burger--opened');
  }
});
