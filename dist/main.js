// Setting up the date so that it dynamically updates every year
var date = document.querySelector("#date");
date.textContent = new Date().getFullYear();
// Nav toggle
var navToggle = document.querySelector(".nav-toggle");
var links = document.querySelector(".links");
var scrollLinks = document.querySelectorAll(".scroll-links");
navToggle.addEventListener("click", function () {
    if (links.classList.contains("links-toggle")) {
        links.classList.remove("links-toggle");
    }
    else {
        links.classList.add("links-toggle");
    }
});
links.addEventListener("click", function () {
    if (links.classList.contains("links-toggle")) {
        links.classList.remove("links-toggle");
    }
});
//  Fixed navbar
var nav = document.querySelector(".navbar");
var projectsSection = document.querySelector(".projects");
var projectSectionHeight = projectsSection.offsetTop - 500;
var fixednav = function () {
    if (window.scrollY > projectSectionHeight) {
        nav.classList.add("fixed");
    }
    else {
        nav.classList.remove("fixed");
    }
};
window.addEventListener("scroll", fixednav);
// Slider
var slides = document.querySelectorAll(".slide");
var nextBtn = document.querySelector(".nextBtn");
var prevBtn = document.querySelector(".prevBtn");
slides.forEach(function (slide, index) {
    slide.style.left = "".concat(index * 100, "%");
});
var counter = 0;
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
        slide.style.transform = "translateX(-".concat(counter * 100, "%)");
    });
}
prevBtn.style.display = "none";
