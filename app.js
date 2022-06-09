const burgerBtn = document.querySelector(".toggle-nav");
const sitenavLeft = document.querySelector(".left-sitenav");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".toggle-navbar");

burgerBtn.addEventListener("click", () => {
  sitenavLeft.classList.remove("left-nav-remove");
  sitenavLeft.classList.add("left-nav-add");
  overlay.classList.remove("hidden");
});

overlay.addEventListener("click", () => {
  sitenavLeft.classList.add("left-nav-remove");
  sitenavLeft.classList.remove("left-nav-add");
  overlay.classList.add("hidden");
});

closeBtn.addEventListener("click", () => {
    sitenavLeft.classList.remove("left-nav-add");
  sitenavLeft.classList.add("left-nav-remove");
  overlay.classList.add("hidden");
});
