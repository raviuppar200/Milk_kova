// MAIN ELEMENTS

const mainImage = document.getElementById("mainProductImage");

const productTitle = document.getElementById("productTitle");

const currentPrice = document.getElementById("currentPrice");

const oldPrice = document.getElementById("oldPrice");

const quantityText = document.getElementById("quantity");

const plusBtn = document.getElementById("plus");

const minusBtn = document.getElementById("minus");

const cartCount = document.getElementById("cart-count");

const addCartBtn = document.querySelector(".add-cart");

const buyNowBtn = document.querySelector(".buy-now");

const thumbs = document.querySelectorAll(".thumb");

const cards = document.querySelectorAll(".card");

const weightBtns = document.querySelectorAll(".weight-btn");

const tabBtns = document.querySelectorAll(".tab-btn");

const tabContents = document.querySelectorAll(".tab-content");

const desc = document.querySelector(".desc");

const exploreBtn = document.querySelector(".hero button");

const contactForm = document.querySelector(".contact-form");


// PRODUCT DATABASE

const products = {

  milkburfi: {

    title: "Premium Milk Burfi",

    image: "images/milkburfie.jpg",

    price: 450,

    oldPrice: 500,

    description:
      "Authentic Karnataka milk burfi handcrafted using pure milk, premium ghee and traditional recipes."

  },

  jamun: {

    title: "Classic Gulab Jamun",

    image: "images/jamun.jpg",

    price: 320,

    oldPrice: 360,

    description:
      "Soft and delicious gulab jamun prepared using rich khoya and traditional ingredients."

  },

  milkkova: {

    title: "Premium Milk Kova",

    image: "images/milk-kova.png",

    price: 380,

    oldPrice: 420,

    description:
      "Rich Karnataka milk kova made with slow-cooked milk and heritage sweet-making techniques."

  }

};


// CURRENT PRODUCT

let selectedProduct = "milkburfi";


// QUANTITY

let quantity = 1;


// WEIGHT MULTIPLIER

let weightMultiplier = 1;


// UPDATE PRICE FUNCTION

function updatePrice(product) {

  const totalPrice =
    product.price * quantity * weightMultiplier;

  const totalOldPrice =
    product.oldPrice * quantity * weightMultiplier;

  currentPrice.innerText = "₹" + totalPrice;

  oldPrice.innerText = "₹" + totalOldPrice;

}


// UPDATE PRODUCT FUNCTION

function updateProduct(productKey) {

  const product = products[productKey];

  selectedProduct = productKey;

  // UPDATE IMAGE

  mainImage.src = product.image;

  // UPDATE TITLE

  productTitle.innerText = product.title;

  // UPDATE DESCRIPTION

  desc.innerText = product.description;

  // UPDATE PRICE

  updatePrice(product);

  // UPDATE ACTIVE THUMBNAIL

  thumbs.forEach(t =>
    t.classList.remove("active")
  );

  if(productKey === "milkburfi"){

    thumbs[0].classList.add("active");

  }

  else if(productKey === "jamun"){

    thumbs[1].classList.add("active");

  }

  else{

    thumbs[2].classList.add("active");

  }

}


// THUMBNAIL CLICK EVENTS

thumbs.forEach((thumb, index) => {

  thumb.addEventListener("click", () => {

    quantity = 1;

    quantityText.innerText = quantity;

    weightMultiplier = 1;

    resetWeightButtons();

    if(index === 0){

      updateProduct("milkburfi");

    }

    else if(index === 1){

      updateProduct("jamun");

    }

    else if(index === 2){

      updateProduct("milkkova");

    }

  });

});


// RELATED PRODUCT CARDS

cards.forEach(card => {

  card.addEventListener("click", () => {

    quantity = 1;

    quantityText.innerText = quantity;

    weightMultiplier = 1;

    resetWeightButtons();

    const name = card.dataset.name;

    if(name === "Premium Milk Burfi"){

      updateProduct("milkburfi");

    }

    else if(name === "Classic Gulab Jamun"){

      updateProduct("jamun");

    }

    else{

      updateProduct("milkkova");

    }

    // SCROLL TO PRODUCT

    document
      .querySelector(".product-section")
      .scrollIntoView({

        behavior: "smooth"

      });

  });

});


// PLUS BUTTON

plusBtn.addEventListener("click", () => {

  quantity++;

  quantityText.innerText = quantity;

  updatePrice(products[selectedProduct]);

});


// MINUS BUTTON

minusBtn.addEventListener("click", () => {

  if(quantity > 1){

    quantity--;

    quantityText.innerText = quantity;

    updatePrice(products[selectedProduct]);

  }

});


// ADD TO CART

let cart = 0;

addCartBtn.addEventListener("click", () => {

  cart += quantity;

  cartCount.innerText = cart;

  alert(
    quantity +
    " item(s) added to cart!"
  );

});


// BUY NOW BUTTON

buyNowBtn.addEventListener("click", () => {

  alert(
    "Proceeding to checkout for " +
    quantity +
    " item(s)"
  );

});


// RESET WEIGHT BUTTONS

function resetWeightButtons(){

  weightBtns.forEach(btn =>
    btn.classList.remove("active")
  );

  weightBtns[0].classList.add("active");

}


// WEIGHT BUTTONS

weightBtns.forEach(btn => {

  btn.addEventListener("click", () => {

    weightBtns.forEach(b =>
      b.classList.remove("active")
    );

    btn.classList.add("active");

    const weight = btn.innerText;

    if(weight === "250g"){

      weightMultiplier = 1;

    }

    else if(weight === "500g"){

      weightMultiplier = 2;

    }

    else if(weight === "1kg"){

      weightMultiplier = 4;

    }

    updatePrice(products[selectedProduct]);

  });

});


// TABS

tabBtns.forEach(btn => {

  btn.addEventListener("click", () => {

    tabBtns.forEach(b =>
      b.classList.remove("active")
    );

    tabContents.forEach(content =>
      content.classList.remove("active")
    );

    btn.classList.add("active");

    document
      .getElementById(btn.dataset.tab)
      .classList.add("active");

  });

});


// EXPLORE COLLECTION BUTTON

exploreBtn.addEventListener("click", () => {

  document
    .getElementById("products")
    .scrollIntoView({

      behavior: "smooth"

    });

});


// CONTACT FORM

contactForm.addEventListener("submit", (e) => {

  e.preventDefault();

  alert(
    "Thank you for contacting Karnataka Kova Heritage!"
  );

  contactForm.reset();

});


// INITIAL LOAD

updateProduct("milkburfi");