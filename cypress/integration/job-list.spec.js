describe("Job List", () => {
  it("should display the job list", () => {
    cy.visit("http://localhost:4200"); // Adjust the URL if necessary
    cy.get("h2").contains("Job List");
    cy.get("li").should("have.length.greaterThan", 0);
  });
});
