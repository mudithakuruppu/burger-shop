import { returnadminPage } from "./dash.js";
import { objArray } from "./FoodData.js";



function returnBackButton(){
  return`
    <button id="back-BTN" class="back-b">Back</button>
  `

}

function returntoHome(){
  document.getElementById("back-BTN").addEventListener("click",homePage)
}

// Render homepage
function homePage() {
  document.getElementById("root").innerHTML = renderHeader()+`
  
  <div class="products-section">
      <h1 class="section-title">Our Delicious Burgers</h1>
      <div class="products-container" id="products-container"></div>
    </div>
    <section class="cart-section" id="cart-section"></section>
    
  `;
  document.getElementById("login-btn").addEventListener("click",()=>{
    document.getElementById("root").innerHTML= login();
    document.getElementById("submit-btn").addEventListener("click",()=>{
      document.getElementById("root").innerHTML= renderHeader()+returnadminPage()+returnBackButton()
      document.getElementById("add-Product").addEventListener("click",()=>{
        document.getElementById("main-content").innerHTML = `<!-- Add Product Section -->
        <section id="addProduct" class="dashboard-section">
          <h2>Add New Product</h2>
          <form id="add-product-form" enctype="multipart/form-data">
            <label for="productName">Product Name:</label>
            <input type="text" id="productName" required>
        
            <label for="productPrice">Product Price:</label>
            <input type="number" id="productPrice" required>
        
            <label for="productDesc">Product Description:</label>
            <textarea id="productDesc" required></textarea>
        
            <label for="productImage">Product Image:</label>
            <input type="file" id="productImage" accept="image/*" onchange="previewImage(event)" required>
        
            <!-- Image Preview -->
            <div id="imagePreviewContainer" style="display: none;">
              <h3>Image Preview:</h3>
              <img id="imagePreview" src="" alt="Image Preview" style="width: 100%; max-width: 300px;"/>
            </div>
        
            <button type="submit">Add Product</button>
          </form>
        </section>`
      })
      document.getElementById("back-BTN").addEventListener("click",()=>{homePage()})
    })
  });


  renderProducts();
  
}

homePage();

function renderHeader(){
  return`
    <header class="modern-header">
  <div class="container">
    <div class="logo">
      <img src="imgs/logo.png" alt="Website Logo">
    </div>
    <nav class="navlinks">
      <ul>
        <li><a href="HomePage()">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/shop">Shop</a>
        </li>
        <li><button id="login-btn">Login</button></li>
        <li><a href="/cart.html">Cart</a></li>
      </ul>
    </nav>
    <div class="search-bar">
      <input type="text" placeholder="Search...">
      <button type="submit">Search</button>
    </div>
    <div class="hamburger" onclick="toggleMenu()">☰</div>
  </div>
</header>
  `
}


// all products render
function renderProducts() {
  let obj = "";
  objArray.forEach((value) => {
    obj += `
      <div class="product-card">
        <img src="${value.item_src}" alt="${value.item_name}">
        <h3>${value.item_name}</h3>
        <p>${value.item_desc}</p>
        <p class="price">$${value.item_price.toFixed(2)}</p>
        <button class="add-to-cart" onclick="addToCart('${value.item_name}', ${value.item_price}, '${value.item_src}')">Add to Cart</button>
      </div>
    `;
  });
  document.getElementById("products-container").innerHTML = obj;
}

// burgers

function Burgers() {
  let obj = "";
  const burgerItems = objArray.filter(item => item.category === "Burgers");

  if (burgerItems.length === 0) {
    obj = "<p>No burgers available at the moment.</p>";
  } else {
    burgerItems.forEach((value) => {
      obj += `
        <div class="product-card">
          <img src="${value.item_src}" alt="${value.item_name}">
          <h3>${value.item_name}</h3>
          <p>${value.item_desc}</p>
          <p class="price">$${value.item_price.toFixed(2)}</p>
          <button class="add-to-cart" onclick="addToCart('${value.item_name}', ${value.item_price}, '${value.item_src}')">Add to Cart</button>
        </div>
      `;
    });
  }

  document.getElementById("products-container").innerHTML = obj;
}


/// Submarine products

function Submarine() {
  let obj = "";
  const burgerItems = objArray.filter(item => item.category === "Submarines");

  if (burgerItems.length === 0) {
    obj = "<p>No burgers available at the moment.</p>";
  } else {
    burgerItems.forEach((value) => {
      obj += `
        <div class="product-card">
          <img src="${value.item_src}" alt="${value.item_name}">
          <h3>${value.item_name}</h3>
          <p>${value.item_desc}</p>
          <p class="price">$${value.item_price.toFixed(2)}</p>
          <button class="add-to-cart" onclick="addToCart('${value.item_name}', ${value.item_price}, '${value.item_src}')">Add to Cart</button>
        </div>
      `;
    });
  }

  document.getElementById("products-container").innerHTML = obj;
}

// Pasta Products

function pastaProducts() {
  let obj = "";
  const burgerItems = objArray.filter(item => item.category === "Pasta");

  if (burgerItems.length === 0) {
    obj = "<p>No burgers available at the moment.</p>";
  } else {
    burgerItems.forEach((value) => {
      obj += `
        <div class="product-card">
          <img src="${value.item_src}" alt="${value.item_name}">
          <h3>${value.item_name}</h3>
          <p>${value.item_desc}</p>
          <p class="price">$${value.item_price.toFixed(2)}</p>
          <button class="add-to-cart" onclick="addToCart('${value.item_name}', ${value.item_price}, '${value.item_src}')">Add to Cart</button>
        </div>
      `;
    });
  }

  document.getElementById("products-container").innerHTML = obj;
}


/// Fries and chicken  
function friesProducts() {
  let obj = "";
  const burgerItems = objArray.filter(item => item.category === "Fries");

  if (burgerItems.length === 0) {
    obj = "<p>No burgers available at the moment.</p>";
  } else {
    burgerItems.forEach((value) => {
      obj += `
        <div class="product-card">
          <img src="${value.item_src}" alt="${value.item_name}">
          <h3>${value.item_name}</h3>
          <p>${value.item_desc}</p>
          <p class="price">$${value.item_price.toFixed(2)}</p>
          <button class="add-to-cart" onclick="addToCart('${value.item_name}', ${value.item_price}, '${value.item_src}')">Add to Cart</button>
        </div>
      `;
    });
  }

  document.getElementById("products-container").innerHTML = obj;
}


/////  Beverages products

function beverageProducts() {
  let obj = "";
  const burgerItems = objArray.filter(item => item.category === "Beverages");

  if (burgerItems.length === 0) {
    obj = "<p>No burgers available at the moment.</p>";
  } else {
    burgerItems.forEach((value) => {
      obj += `
        <div class="product-card">
          <img src="${value.item_src}" alt="${value.item_name}">
          <h3>${value.item_name}</h3>
          <p>${value.item_desc}</p>
          <p class="price">$${value.item_price.toFixed(2)}</p>
          <button class="add-to-cart" onclick="addToCart('${value.item_name}', ${value.item_price}, '${value.item_src}')">Add to Cart</button>
        </div>
      `;
    });
  }

  document.getElementById("products-container").innerHTML = obj;
}




/* login page for js */

function login() {
  return`
  <div class="login-form">
    <h2>Login</h2>
    <form id="login-form">
      <label for="username">Username or Email:</label>
      <input type="text" id="username" name="username" required>
      
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required>
      
      <button id="submit-btn" type="submit">Login</button>
      
      <div id="error-message" style="display: none; color: red;">Invalid username or password.</div>
    </form>
    <p>Don't have an account? <a href="signup.html">Sign up here</a></p>
  </div>
  
  `


let users = [
  { username: "admin", password: "admin123", email: "admin@example.com" },
  { username: "user1", password: "password1", email: "user1@example.com" },
];


document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault(); 

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const user = users.find(u => (u.username === username || u.email === username) && u.password === password);

  if (user) {
    
    localStorage.setItem('username', user.username);

    
    window.location.href = "dashboard.html";
  } else {
    
    document.getElementById('error-message').style.display = "block";
  }
});
}


/* cart */

let cartArray = [];



