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

// Scroll behavior of the page

scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // When the link is clicked nothing happens
    e.preventDefault();
    // navigate to a specific spot on the page
    const specificSpot = e.currentTarget.getAttribute("href").slice(1);
    const elementOnPage = document.getElementById(specificSpot);
    // Heights
    const navHeight = navToggle.getBoundingClientRect().height;
    const containerHeight = links.getBoundingClientRect().height;

    // Position
    let position = element.offSetTop - specificSpot;

    // Logic
    if (!navHeight) {
      position = position - specificSpot;
    }
    // if the spot on the page is > 82 px
    if (specificSpot > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });

    // To close the window
    links.style.height = 0;
  });
});
