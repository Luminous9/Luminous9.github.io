let aboutButton = document.querySelector("#about");
let skillsButton = document.querySelector("#skills");
let portfolioButton = document.querySelector("#portfolio");
let contactButton = document.querySelector("#contact");

aboutButton.addEventListener("click", () => {
    document.querySelector(".about").scrollIntoView();
});

skillsButton.addEventListener("click", () => {
    document.querySelector(".skills").scrollIntoView();
});

portfolioButton.addEventListener("click", () => {
    document.querySelector(".portfolio").scrollIntoView();
});

contactButton.addEventListener("click", () => {
    document.querySelector(".contact").scrollIntoView();
});


const navbar = document.querySelector("nav");
const navbarHeight = navbar.offsetHeight;
let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
const delta = 4;

window.addEventListener("scroll", function () {
    let scrollChange = window.pageYOffset || document.documentElement.scrollTop;
    let diff = Math.abs(lastScrollTop - scrollChange);
    if (diff <= delta) {
        lastScrollTop = scrollChange;
        return;
    }
    if (scrollChange > lastScrollTop && scrollChange > navbarHeight) {
        navbar.classList.add("nav-hide");
    } else {
        navbar.classList.remove("nav-hide");
    }
    lastScrollTop = scrollChange;
}, false);