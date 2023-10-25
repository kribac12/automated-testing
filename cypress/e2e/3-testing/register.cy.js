describe("Registration Test", () => {
  beforeEach(() => {
    // Assuming you have the register page saved as `index.html` at the root of your project.
    cy.visit("/register.html"); // Replace with your actual path.
  });

  it("should register a new user", () => {
    const username = "testuser";
    const password = "testpass123";

    cy.get("#regUsername").type(username);
    cy.get("#regPassword").type(password);
    cy.get("#regConfirmPassword").type(password);

    cy.get('button[type="submit"]').click();

    // You can check for the alert message. Remember this might not be the best way to provide feedback to users in real applications, but for this example, it's okay.
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Registration successful!");
    });

    // Optionally, if you want to verify that the values were stored in localStorage (though not typically recommended for real-world apps due to security concerns):
    cy.window().should((window) => {
      expect(window.localStorage.getItem("registeredUsername")).to.eq(username);
      expect(window.localStorage.getItem("registeredPassword")).to.eq(password);
    });
  });

  it("should show an alert if passwords do not match", () => {
    const username = "testuser2";
    const password = "testpass123";
    const confirmPassword = "wrongpassword";

    cy.get("#regUsername").type(username);
    cy.get("#regPassword").type(password);
    cy.get("#regConfirmPassword").type(confirmPassword);

    cy.get('button[type="submit"]').click();

    cy.on("window:alert", (str) => {
      expect(str).to.equal("Passwords do not match!");
    });
  });
});
