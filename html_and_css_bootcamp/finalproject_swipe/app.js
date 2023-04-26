const hamburger = document.querySelector(".hamburger-button");
const mobileNav = document.querySelector(".mobileNav");


 hamburger.addEventListener("click", () => {
    mobileNav.classList.toggle("openDrawer");
 });