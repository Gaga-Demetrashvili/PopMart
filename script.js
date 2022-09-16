const date = new Date();
const currentYear = date.getFullYear();
const copyrightDateEl = document.querySelector(".year");
copyrightDateEl.innerHTML = currentYear;

const heartIconContainerEls = document.querySelectorAll(".icon__container__top");
const heartIconEls = document.querySelectorAll(".heart-icon");
heartIconContainerEls.forEach(cont => cont.addEventListener("click", e => {
    e.preventDefault();
    heartIconEls.forEach(el => el.classList.toggle("heart-icon--filled"));
}));

const cartIconContainerEls = document.querySelectorAll(".icon__container__bottom");
const arrowIconContainerEls = document.querySelectorAll(".arrow-icon-container");
cartIconContainerEls.forEach(cont => cont.addEventListener("click", e => {
    e.preventDefault();
    arrowIconContainerEls.forEach(el => el.classList.toggle("arrow-icon-container--visible"));
}));