describe("Login Test", function () {
  it("Should login with valid credentials", function () {
    // Visit the login page (adjust the URL if your HTML file is located elsewhere)
    cy.visit("/index.html");

    // Type 'admin' into the username field
    cy.get("#username").type("admin");

    // Type 'secret' into the password field
    cy.get("#password").type("secret");

    // Click the login button
    cy.get('input[type="submit"]').click();

    // Ensure the login was successful
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Login successful!");
    });
  });

  it("Should not login with invalid credentials", function () {
    cy.visit("/index.html");

    cy.get("#username").type("wrongUser");
    cy.get("#password").type("wrongPassword");
    cy.get('input[type="submit"]').click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Invalid username or password.");
    });
  });
});
