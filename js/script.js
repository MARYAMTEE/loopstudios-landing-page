const openMenu = document.querySelector(".nav__open");
const closeMenu = document.querySelector(".nav__close");
const navMenu = document.querySelector(".loopstudio__header .nav__menu");
const navItems = document.querySelectorAll(".loopstudio__header .nav__item");

openMenu.addEventListener("click", ()=>{
    navMenu.classList.toggle("toggle");
});

closeMenu.addEventListener("click", ()=> {
    navMenu.classList.remove("toggle");
});

navItems.forEach(item => {
    item.addEventListener("click", () => {
        navMenu.classList.remove("toggle");
    })
});