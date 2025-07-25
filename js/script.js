openMenu = document.querySelector(".nav__open");
closeMenu = document.querySelector(".nav__close");
navMenu = document.querySelector(".loopstudio__header .nav__menu");
navItems = document.querySelectorAll(".loopstudio__header .nav__item");

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