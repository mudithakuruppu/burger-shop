
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
  