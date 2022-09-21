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

const productNames = document.querySelectorAll(".product__name");
// productNames.forEach(p => p.innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")
// productNames.forEach(p => p.innerHTML = "Lorem Ipsum is");

const productBrands = document.querySelectorAll(".product__brand");
// productBrands.forEach(p => p.innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")