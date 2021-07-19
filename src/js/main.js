"use strict";

console.log(">> Ready :)");

// selector
var menu = document.querySelector(".js-hamburger");

// method
function toggleMenu(event) {
  this.classList.toggle("is-active");
  document.querySelector(".js-nav").classList.toggle("is_active");
  event.preventDefault();
}

// event
menu.addEventListener("click", toggleMenu, false);
