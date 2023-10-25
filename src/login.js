document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission which reloads the page

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // For simplicity, we're hardcoding a username and password check here
  // In a real-world application, you'd want to check these against a backend/database
  if (username === "admin" && password === "secret") {
    alert("Login successful!");
    // Here you can redirect the user or do any other logic upon successful login
  } else {
    alert("Invalid username or password.");
  }
});
