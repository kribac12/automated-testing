document.getElementById("registerForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("regUsername").value;
  const password = document.getElementById("regPassword").value;
  const confirmPassword = document.getElementById("regConfirmPassword").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  // Here, you might typically send the data to a server to store in a database.
  // For the purpose of this example, we'll just store it in local storage.
  localStorage.setItem("registeredUsername", username);
  localStorage.setItem("registeredPassword", password);
  console.log("Storing data:", username, password);

  alert("Registration successful!");
  // You might want to redirect to a login page or elsewhere after successful registration.
});
