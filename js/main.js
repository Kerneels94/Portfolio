"use strict";
// Setting up the date so that it dynamically updates every year
const date = document.querySelector("#date");
date.textContent = new Date().getFullYear();
// Nav toggle
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const scrollLinks = document.querySelectorAll(".scroll-links");
navToggle.addEventListener("click", () => {
    if (links.classList.contains("links-toggle")) {
        links.classList.remove("links-toggle");
    }
    else {
        links.classList.add("links-toggle");
    }
});
links.addEventListener("click", () => {
    if (links.classList.contains("links-toggle")) {
        links.classList.remove("links-toggle");
    }
});
//  Fixed navbar
const nav = document.querySelector(".navbar");
const projectsSection = document.querySelector(".projects");
let projectSectionHeight = projectsSection.offsetTop - 500;
const fixednav = () => {
    if (window.scrollY > projectSectionHeight) {
        nav.classList.add("fixed");
    }
    else {
        nav.classList.remove("fixed");
    }
};
window.addEventListener("scroll", fixednav);
// Slider
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
slides.forEach(function (slide, index) {
    slide.style.left = `${index * 100}%`;
});
let counter = 0;
nextBtn.addEventListener("click", function () {
    counter++;
    carousel();
});
prevBtn.addEventListener("click", function () {
    counter--;
    carousel();
});
function carousel() {
    if (counter < slides.length - 1) {
        nextBtn.style.display = "block";
    }
    else {
        nextBtn.style.display = "none";
    }
    if (counter > 0) {
        prevBtn.style.display = "block";
    }
    else {
        prevBtn.style.display = "none";
    }
    slides.forEach(function (slide) {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
}
prevBtn.style.display = "none";
// Animated header
const elements = document.querySelector(".animated-blocks");
for (let i = 0; i <= 50; i++) {
    const blocks = document.createElement("div");
    blocks.classList.add("block");
    elements.appendChild(blocks);
}
function animatedBlocks() {
    anime({
        targets: ".block",
        translateX: function () {
            return anime.random(-1200, 1200);
        },
        translateY: function () {
            return anime.random(-500, 500);
        },
        scale: function () {
            return anime.random(1, 6);
        },
        duration: 6000,
        easing: "easeInOutQuad",
        delay: anime.stagger(0.5),
        complete: animatedBlocks,
    });
}
animatedBlocks();
