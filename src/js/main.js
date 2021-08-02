"use strict";

// selector
const menu = document.querySelector(".js-hamburger");

// function
function toggleMenu(event) {
  this.classList.toggle("is-active");
  document.querySelector(".js-nav").classList.toggle("is_active");
  event.preventDefault();
}

// event
menu.addEventListener("click", toggleMenu, false);
