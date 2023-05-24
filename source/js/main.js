// source/js/vendor.js

import { gsap } from "/node_modules/gsap/gsap-core.js";

gsap.from('.page-header__top', { opacity: 0, delay: 1, y: 30});

const pageHeader = document.querySelector('.page-header');
const burger = document.querySelector('.page-header__burger');

pageHeader.classList.remove('page-header--nojs');

function showHeader() {
  pageHeader.classList.toggle('page-header--open');
}

burger.addEventListener('click', showHeader);
