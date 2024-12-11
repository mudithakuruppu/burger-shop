const price = [];
const name = [];
const cart_section = document.getElementById("cart-section");
const cart_card = document.getElementById("cart_card");
const qty = document.getElementById("qty");

// Sample products array 
const objArray = [
  {
    item_name: "Classic Burger",
    item_desc: "A juicy beef patty with fresh lettuce, tomato, and cheese.",
    item_price: "$5.99",
    item_src: "imgs/classic-burger.jpg",
    item_id: "a",
  },
  {
    item_name: "Veggie Burger",
    item_desc: "A juicy veggie patty with fresh lettuce, tomato, and cheese.",
    item_price: "$5.99",
    item_src: "imgs/veggie-burger.jpg",
    item_id: "b",
  },
];

// Initialize the homepage after defining the product array
homePage();

function homePage() {
  document.getElementById("root").innerHTML = `
    <div class="header">
      <div class="headerarea">
          <div class="logo">
              <img src="imgs/logo.png" alt="">
          </div>
          <ul class="navlinks">
              <li><button onclick="homePage()">Home</button></li>
              <li><a href="#">Shop</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact us</a></li>
          </ul>
          <ul class="login">
              <li><a href="#">Login</a></li>
              <li class="signup"><button onclick="loadCart()">Cart</button></li>
          </ul>
      </div>
    </div>
    <div class="products-section">
      <h1 class="section-title">Our Delicious Burgers</h1>
      <div class="products-container" id="products-container"></div>
    </div>
    <section class="cart-section" id="cart-section"></section>
  `;
  renderProducts(); // Call the function to render products
}

// Function to render products
function renderProducts() {
  let obj = "";
  objArray.forEach((value) => {
    let priceNum = parseFloat(value.item_price.replace("$", "")); // Convert price to number
    obj += `
      <div class="product-card">
        <img src="${value.item_src}" alt="${value.item_name}">
        <h3>${value.item_name}</h3>
        <p>${value.item_desc}</p>
        <p class="price">${value.item_price}</p>
        <button class="add-to-cart" onclick="addToCart('${value.item_name}', ${priceNum}, '${value.item_src}')">Add to Cart</button>
      </div>
    `;
  });
  document.getElementById("products-container").innerHTML = obj;
}

// Temporary cart array
let tempCart = [];

// Function to load cart
function loadCart() {
  const root = document.getElementById("root");
  root.innerHTML = `
    <header>
      <h1 class="hname">BURGER CART</h1>
    </header>
    <main>
      <section class="shopping">
        <div class="content" id="cart-content"></div>
      </section>
      <section class="order">
        <div class="content-order">
          <div class="order-summary">
            <h1>ORDER SUMMARY</h1>
            <h3>Subtotal</h3>
            <p id="subtotal">$0.00</p>
            <h3>Shipping</h3>
            <p id="shipping">Free</p>
            <h3>Total</h3>
            <p id="total">$0.00</p>
            <button class="checkout-btn" onclick="checkout()">Check Out</button>
          </div>
        </div>
      </section>
    </main>
  `;

  // Render cart items
  const cartContent = document.getElementById("cart-content");
  if (tempCart.length === 0) {
    cartContent.innerHTML = "<p>Your cart is empty.</p>";
  } else {
    cartContent.innerHTML = tempCart.map((item, index) => `
      <div class="cart-card" data-index="${index}">
        <img src="${item.item_src}" alt="${item.item_name}">
        <h2 class="item-name">${item.item_name}</h2>
                <p class="price" id="price-${index}">$${item.item_price}</p>
        <div class="quantity-selector">
          <button class="quantity-btn" onclick="updateQuantity(${index}, -1)">−</button>
          <span id="quantity-${index}">${item.quantity}</span>
          <button class="quantity-btn" onclick="updateQuantity(${index}, 1)">+</button>
        </div>
        <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
      </div>
    `).join('');
  }

  // Update order summary
  updateOrderSummary();
}

// Add to Cart function
function addToCart(name, price, itemSrc) {
  const existingItem = tempCart.find(item => item.item_name === name);
  if (existingItem) {
    existingItem.quantity += 1; // Increase quantity if item exists
  } else {
    tempCart.push({
      item_name: name,
      item_price: price,
      item_src: itemSrc, // Use itemSrc for the image
      quantity: 1,
    });
  }
  loadCart(); // Re-render the cart with updated items
}

// Update item quantity and price
function updateQuantity(index, change) {
  const item = tempCart[index];
  if (item.quantity + change > 0) {
    item.quantity += change;
    document.getElementById(`quantity-${index}`).textContent = item.quantity;
    updateOrderSummary();
  }
}

// Remove item from cart
function removeFromCart(index) {
  tempCart.splice(index, 1); // Remove item from the array
  loadCart(); // Re-render cart
}

// Update order summary
function updateOrderSummary() {
  let subtotal = 0;
  tempCart.forEach(item => {
    subtotal += item.item_price * item.quantity;
  });

  // Update summary
  document.getElementById("subtotal").textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById("total").textContent = `$${subtotal.toFixed(2)}`;  // Assuming free shipping
}

// Checkout function
function checkout() {
  const root = document.getElementById("root");
  root.innerHTML = `
    <div class="checkout-container">
        <h1>Checkout</h1>

        <div class="checkout-section">
            <div class="order-summary">
                <h2>Order Summary</h2>
                <table id="order-summary">
                    <tr>
                        <td>Subtotal:</td>
                        <td id="subtotal">$0.00</td>
                    </tr>
                    <tr>
                        <td>Shipping:</td>
                        <td>Free</td>
                    </tr>
                    <tr>
                        <td><strong>Total:</strong></td>
                        <td id="total"><strong>$0.00</strong></td>
                    </tr>
                </table>
            </div>

            <div class="shipping-info">
                <h2>Shipping Information</h2>
                <form id="shipping-form">
                    <label for="full-name">Full Name</label>
                    <input type="text" id="full-name" name="full-name" required>

                    <label for="address">Address</label>
                    <input type="text" id="address" name="address" required>

                    <label for="city">City</label>
                    <input type="text" id="city" name="city" required>

                    <label for="postal-code">Postal Code</label>
                    <input type="text" id="postal-code" name="postal-code" required>

                    <h2>Payment Information</h2>
                    <label for="card-name">Name on Card</label>
                    <input type="text" id="card-name" name="card-name" required>

                    <label for="card-number">Card Number</label>
                    <input type="text" id="card-number" name="card-number" required>

                    <label for="expiry">Expiry Date</label>
                    <input type="month" id="expiry" name="expiry" required>

                    <label for="cvv">CVV</label>
                    <input type="text" id="cvv" name="cvv" required>

                    <button type="submit" id="checkout-btn">Complete Purchase</button>
                </form>
            </div>
        </div>
    </div>
  `;
  // Update the checkout information
  updateOrderSummary();
}

