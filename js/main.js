// import Splide from "@splidejs/splide";
// Imports

// new Splide(".splide").mount();

// Scroll functionality for the webpage

// Setting up the date so that it dynamically updates every year
date = document.querySelector("#date");
date.innerHTML = new Date().getFullYear();

// Navigation bar functionality
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const scrollLinks = document.querySelectorAll(".scroll-links");

navToggle.addEventListener("click", () => {
  if (links.classList.contains("links-toggle")) {
    links.classList.remove("links-toggle");
  } else {
    links.classList.add("links-toggle");
  }
});

links.addEventListener("click", () => {
  if (links.classList.contains("links-toggle")) {
    links.classList.remove("links-toggle");
  }
});
