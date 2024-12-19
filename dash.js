export function returnadminPage(){
    return `
    <div class="myWrapper">
        <div class="dashboard-container">
          <!-- Sidebar -->
          <div class="sidebar">
            <div class="sidebar-header">
              <h2 class="dash-h1">Admin Panel</h2>
            </div>
            <ul class="sidebar-menu">
              <li><button id="add-Product">Add Product</button></li>
              <li><a href="#" onclick="showSection('showUsers')">Show Users</a></li>
              <li><a href="#" onclick="showSection('productAnalytics')">Product Analytics</a></li>
              <li><a href="#" onclick="showSection('priceOverview')">Price Overview</a></li>
              <li><a href="login.html" onclick="logout()">Logout</a></li>
            </ul>
          </div>
          <!-- Main Content -->
          <div id="main-content" class="main-content">
            <!-- Header -->
            <header class="dashboard-header">
              <h1>Welcome to the Admin Dashboard</h1>
            </header>
        
            <!-- Show Users Section -->
            <section id="showUsers" class="dashboard-section">
              <h2>Registered Users</h2>
              <ul id="usersList"></ul>
            </section>
            <!-- Product Analytics Section -->
            <section id="productAnalytics" class="dashboard-section">
              <h2>Product Analytics</h2>
              <div id="analyticsContent">
                <p>Total Products: <span id="totalProducts">0</span></p>
                <p>Average Price: $<span id="avgPrice">0.00</span></p>
              </div>
            </section>
            <!-- Price Overview Section -->
            <section id="priceOverview" class="dashboard-section">
              <h2>Price Overview</h2>
              <div id="priceStats">
                <p>Highest Price: $<span id="highestPrice">0.00</span></p>
                <p>Lowest Price: $<span id="lowestPrice">0.00</span></p>
              </div>
            </section>
          </div>
        </div>
    </div>
    `
  }
  