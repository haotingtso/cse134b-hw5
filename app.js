const nav = document.querySelector("nav");
const hamburger = document.querySelector("#hamburger");

function main() {
  addEventListeners();
}

function addEventListeners() {
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
}

main();
