const refreshEl = document.querySelector(".refresh");
const errorEl = document.querySelector(".error");
const valentineEl = document.querySelector(".valentine");
const valDescEl = document.querySelector(".valentine__description");
const btnYesEl = document.querySelector(".valentine__yes");
const btnNoEl = document.querySelector(".valentine__no");
const body = document.querySelector("section");

refreshEl.addEventListener("click", () => {
  errorEl.classList.add("hidden");
  valentineEl.classList.remove("hidden");
});

btnYesEl.addEventListener("click", () => {
  valDescEl.classList.remove("visibility");
});

btnNoEl.addEventListener("mouseover", () => {
  const randomNum1 = Math.trunc(Math.random() * 80) + 1;
  const randomNum2 = Math.trunc(Math.random() * 80) + 1;

  btnNoEl.classList.add("position");

  document.documentElement.style.setProperty('--top', `${randomNum1}%`);
  document.documentElement.style.setProperty('--left', `${randomNum2}%`);
});
