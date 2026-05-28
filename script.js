// IMAGE GALLERY

const thumbs = document.querySelectorAll(".thumb");
const mainImage = document.getElementById("mainProductImage");

thumbs.forEach((thumb) => {

  thumb.addEventListener("click", () => {

    mainImage.src = thumb.src;

    thumbs.forEach(t => t.classList.remove("active"));

    thumb.classList.add("active");

  });

});


// WEIGHT BUTTONS

const weightBtns = document.querySelectorAll(".weight-btn");

weightBtns.forEach((btn) => {

  btn.addEventListener("click", () => {

    weightBtns.forEach(b => b.classList.remove("active"));

    btn.classList.add("active");

  });

});


// QUANTITY

let quantity = 1;

const quantityText = document.getElementById("quantity");

document.getElementById("plus").addEventListener("click", () => {

  quantity++;

  quantityText.innerText = quantity;

});

document.getElementById("minus").addEventListener("click", () => {

  if(quantity > 1){

    quantity--;

    quantityText.innerText = quantity;

  }

});


// ADD TO CART

let cartCount = 0;

document.querySelector(".add-cart").addEventListener("click", () => {

  cartCount += quantity;

  document.getElementById("cart-count").innerText = cartCount;

  alert("Product added to cart!");

});


// TABS

const tabBtns = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabBtns.forEach((btn) => {

  btn.addEventListener("click", () => {

    tabBtns.forEach(b => b.classList.remove("active"));

    tabContents.forEach(c => c.classList.remove("active"));

    btn.classList.add("active");

    document
      .getElementById(btn.dataset.tab)
      .classList.add("active");

  });

});


// RELATED PRODUCTS

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {

  card.addEventListener("click", () => {

    document.getElementById("productTitle").innerText =
      card.dataset.name;

    document.getElementById("currentPrice").innerText =
      card.dataset.price;

    document.getElementById("oldPrice").innerText =
      card.dataset.old;

    mainImage.src = card.dataset.image;

    window.scrollTo({
      top:0,
      behavior:"smooth"
    });

  });

});