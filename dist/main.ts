// Setting up the date so that it dynamically updates every year
const date: any = document.querySelector("#date");
date.textContent = new Date().getFullYear();

// Nav toggle
const navToggle: any = document.querySelector(".nav-toggle");
const links: any = document.querySelector(".links");
const scrollLinks: any = document.querySelectorAll(".scroll-links");

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

//  Fixed navbar

const nav: any = document.querySelector(".navbar");

const projectsSection: any = document.querySelector(".projects");

let projectSectionHeight = projectsSection.offsetTop - 500;

const fixednav = () => {
  if (window.scrollY > projectSectionHeight) {
    nav.classList.add("fixed");
  } else {
    nav.classList.remove("fixed");
  }
};

window.addEventListener("scroll", fixednav);

// Slider

const slides = document.querySelectorAll(".slide");
const nextBtn: any = document.querySelector(".nextBtn");
const prevBtn: any = document.querySelector(".prevBtn");
slides.forEach(function (slide: any, index) {
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
  } else {
    nextBtn.style.display = "none";
  }
  if (counter > 0) {
    prevBtn.style.display = "block";
  } else {
    prevBtn.style.display = "none";
  }
  slides.forEach(function (slide: any) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}

prevBtn.style.display = "none";
