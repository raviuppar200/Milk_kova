// MAIN ELEMENTS

const mainImage = document.getElementById("mainProductImage");
const productTitle = document.getElementById("productTitle");
const currentPrice = document.getElementById("currentPrice");
const oldPrice = document.getElementById("oldPrice");

const cards = document.querySelectorAll(".card");

const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const quantityText = document.getElementById("quantity");

const cartCount = document.getElementById("cart-count");

const addCartBtn = document.querySelector(".add-cart");


// PRODUCT DATA

const products = {

  "Premium Milk Burfi": {
    image: "images/milkburfie.jpg",
    price: 450,
    oldPrice: 500
  },

  "Classic Gulab Jamun": {
    image: "images/jamun.jpg",
    price: 320,
    oldPrice: 360
  },

  "Premium Traditional Sweet": {
    image: "images/milk-kova.png",
    price: 380,
    oldPrice: 420
  }

};


// CURRENT PRODUCT

let selectedProduct = "Premium Milk Burfi";


// QUANTITY

let quantity = 1;


// UPDATE PRODUCT DETAILS

function updateProduct(productName) {

  const product = products[productName];

  selectedProduct = productName;

  mainImage.src = product.image;

  productTitle.innerText = productName;

  currentPrice.innerText = "₹" + (product.price * quantity);

  oldPrice.innerText = "₹" + (product.oldPrice * quantity);

}


// CARD CLICK

cards.forEach(card => {

  card.addEventListener("click", () => {

    const productName = card.dataset.name;

    quantity = 1;

    quantityText.innerText = quantity;

    updateProduct(productName);

  });

});


// PLUS BUTTON

plusBtn.addEventListener("click", () => {

  quantity++;

  quantityText.innerText = quantity;

  updateProduct(selectedProduct);

});


// MINUS BUTTON

minusBtn.addEventListener("click", () => {

  if (quantity > 1) {

    quantity--;

    quantityText.innerText = quantity;

    updateProduct(selectedProduct);

  }

});


// ADD TO CART

let cart = 0;

addCartBtn.addEventListener("click", () => {

  cart += quantity;

  cartCount.innerText = cart;

  alert(quantity + " item(s) added to cart!");

});


// THUMBNAIL IMAGE SWITCHING

const thumbs = document.querySelectorAll(".thumb");

thumbs.forEach(thumb => {

  thumb.addEventListener("click", () => {

    mainImage.src = thumb.src;

    thumbs.forEach(t => t.classList.remove("active"));

    thumb.classList.add("active");

  });

});


// TABS

const tabBtns = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabBtns.forEach(btn => {

  btn.addEventListener("click", () => {

    tabBtns.forEach(b => b.classList.remove("active"));

    tabContents.forEach(content =>
      content.classList.remove("active")
    );

    btn.classList.add("active");

    document
      .getElementById(btn.dataset.tab)
      .classList.add("active");

  });

});