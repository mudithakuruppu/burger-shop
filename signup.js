
let users = [
    { username: "admin", password: "admin123", email: "admin@example.com" },
    { username: "user1", password: "password1", email: "user1@example.com" },
  ];
  
  
  document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    
    const username = document.getElementById('new-username').value;
    const email = document.getElementById('new-email').value;
    const password = document.getElementById('new-password').value;
  
    
    const existingUser = users.find(user => user.username === username);
  
    if (existingUser) {
      alert('Username already exists. Please choose another one.');
    } else {
      
      users.push({ username, password, email });
      alert('Account created successfully! You can now login.');
  
      
      window.location.href = "login.html";
    }
  });
  