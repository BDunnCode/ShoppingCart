// SELECT ELEMENTS
const productsEl = document.querySelector(".products");
const cartItemsEl = document.querySelector(".cart-items");

// RENDER PRODUCTS
function renderProducts() {
  products.forEach((product) => {
    productsEl.innerHTML += `    
            <div class="item">
                <div class="item-container">
                    <div class="item-img">
                        <img src="${product.imgSrc}" alt="${product.name}">
                    </div>
                    <div class="desc">
                        <h2>${product.name}</h2>
                        <h2><small>$</small>${product.price}</h2>
                        <p>
                            ${product.id}
                        </p>
                    </div>
                    <div class="add-to-wishlist">
                        <img src="./icons/heart.png" alt="add to wish list">
                    </div>
                    <div class="add-to-cart" onclick="addToCart(${product.id})">
                        <img src="./icons/bag-plus.png" alt="add to cart">
                    </div>
                </div>
             </div>
        `;
  });
}
renderProducts();

// cart array
let cart = [];

// ADD TO CART
function addToCart(id) {
  // check if product already exists in cart
  if (cart.some((item) => item.id === i)) {
    alert("Product already in cart!");
  } else {
    const item = products.find((product) => product.id === id);
  }

  cart.push({
    ...item,
    numberofUnits: 1,
  });

  updateCart();
}

// update cart
function updateCart() {
  renderCartItems();
  //   renderSubtotal();
}

// render cart items
function renderCartItems() {
  cart.forEach((item) => {
    cartItemsEl.innerHTML += `
        <div class="cart-item">
            <div class="item-info">
                <img src="${item.imgSrc}" alt=" />
                <h4>T-shirt 1</h4>
            </div>
            <div class="unit-price"><small>$</small>29.99</div>
            <div class="units">
                <div class="btn minus">-</div>
                <div class="number">1</div>
                <div class="btn plus">+</div>
            </div>
        </div>
    `;
  });
}
