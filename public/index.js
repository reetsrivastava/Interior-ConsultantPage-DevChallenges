var navbar = document.querySelector("#hamburger");
var menuIcon = document.querySelector("#menu");
var cross = document.querySelector("#cancel");
var logo = document.querySelector("#logo");

navbar.addEventListener('click', () => {
    menuIcon.classList.remove("hidden");
    navbar.classList.add("hidden");
    logo.classList.add("hidden");
});

cross.addEventListener('click',()=> {
    menuIcon.classList.add("hidden");
    navbar.classList.remove("hidden");
    logo.classList.remove("hidden");
})