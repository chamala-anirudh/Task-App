const mobileBtn = document.getElementById("mobile-cta");
const nav = document.querySelector("nav");
const mobileBtnExit = document.querySelector("#mobile-exit");

mobileBtn.addEventListener("click", () => {
  nav.classList.add("menu-btn");
});

mobileBtnExit.addEventListener("click", () => {
  nav.classList.remove("menu-btn");
});
