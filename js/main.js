const btn = document.querySelector("[data-menu-btn]");
const nav = document.querySelector("#menu");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
});

/**
 * function to increment the counter
 *
 * Get elements form html page
 * create counter
 * check if elment value is the same as the counter
 * if so increment the element value with 1
 */

let displayValue = document.querySelectorAll("#num");
let projectsInterval = 19;
let linsOfCodeInterval = 1000;
function increaseNumber(delay) {
  displayValue.forEach((displayNum) => {
    let startingNumber = 0;
    let endingvalue = parseInt(displayNum.getAttribute("data-val"));
    let duration = Math.floor(projectsInterval / endingvalue);
    let durationTwo = Math.floor(linsOfCodeInterval / endingvalue);

    let counter = setInterval(
      () => {
        startingNumber += 1;
        displayNum.textContent = startingNumber;
        if (startingNumber == endingvalue) {
          clearInterval(counter);
        }
      },
      duration,
      durationTwo
    );
  });
}

increaseNumber();
