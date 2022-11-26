// Dynamic date
const dateUpdate = document.querySelector("#date");
const dateFunc = () => {
  const date = new Date();
  const [month, day, year] = [
    date.getMonth(),
    date.getDate(),
    date.getFullYear(),
  ];
  dateUpdate.textContent = date;
};

// EventListeners
window.addEventListener("DOMContentLoaded", () => {
  dateFunc();
});
// TOdo buttons
// Todo dropdown menu
// Functions
// Todo
