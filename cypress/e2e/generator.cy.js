/// <reference types ="cypress" />

describe("generator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5174/#/");
  });

  /*** Material Selection ***/

  // it("should be collapsed initially", () => {
  //   //always fails although height is 0
  //   // cy.get("[data-cy=material-selection]")
  //   //   .children(".medium-selection")
  //   //   .should("not.be.visible");

  //   cy.get("[data-cy=material-selection]").should("have.css", "height", "35px"); //collapsed height is 35px
  // });

  // it("should expand or collapse when clicked", () => {
  //   cy.get("[data-cy=medium-text]").click();
  //   cy.get("[data-cy=material-selection]").should(
  //     "have.css",
  //     "height",
  //     "221px"
  //   ); //expanded height is 221px
  //   cy.get("[data-cy=medium-text]").click();
  //   cy.get("[data-cy=material-selection]").should("have.css", "height", "35px");
  // });

  /*** Categories ***/

  it("should show all default cards before generating", () => {
    cy.get("[data-cy=categories-container]").should("be.visible");
    cy.get("[data-cy=categories-container]")
      .children()
      .should("have.length", 6);
    cy.get("[data-cy=categories-container-challenge-view]").should("not.exist");
  });

  it("should have default styling initially", () => {
    cy.get("[data-cy=categories-container]").children(".card-default-styling");
  });

  it("should toggle styling when selected", () => {
    cy.get("[data-cy=categories-container]")
      .children()
      .click({ multiple: true });
    cy.get("[data-cy=categories-container]").children(".category-selected");

    //todo: check all cards
    cy.get("[data-cy=categories-container]").children().first().click();

    cy.get("[data-cy=categories-container]")
      .children()
      .first()
      .should("have.class", "category-not-selected");
  });

  it("should have default styling when none is selected", () => {
    cy.get("[data-cy=categories-container]").children().first().click();
    cy.get("[data-cy=categories-container]").children().first().click();
    cy.get("[data-cy=categories-container]").children(".card-default-styling");
  });

  it("should only show generate-button", () => {
    cy.get("[data-cy=generate-button]").should("be.visible");
    cy.get("[data-cy=accept-button]").should("not.exist");
    cy.get("[data-cy=re-generate-button]").should("not.exist");
    cy.get("[data-cy=back-button]").should("not.exist");
  });

  it("should be disabled when nothing is selected", () => {
    cy.get("[data-cy=generate-button]").should("be.disabled");

    cy.get("[data-cy=categories-container]").children().first().click();
    cy.get("[data-cy=generate-button]").should("be.enabled");

    cy.get("[data-cy=categories-container]").children().first().click();
    cy.get("[data-cy=generate-button]").should("be.disabled");
  });

  it("should not show challenge", () => {
    cy.get("[data-cy=challenge-display]").should("not.exist");
  });

  /*** Challenge View ***/

  it("should show proper items and styling", () => {
    cy.get("[data-cy=categories-container]")
      .children()
      .click({ multiple: true });

    cy.get("[data-cy=generate-button]").click();

    cy.get("[data-cy=categories-container]").should("not.exist");
    cy.get("[data-cy=categories-container-challenge-view]").should(
      "be.visible"
    );
    cy.get("[data-cy=challenge-display]").should("be.visible");

    cy.get("[data-cy=generate-button]").should("not.exist");
    cy.get("[data-cy=accept-button]").should("be.visible");
    cy.get("[data-cy=re-generate-button]").should("be.visible");
    cy.get("[data-cy=back-button]").should("be.visible");
  });

  /*** View Toggle ***/
  it("should show correct elements and styling based on view", () => {
    cy.get("[data-cy=categories-container]").children().first().click();
    cy.get("[data-cy=generate-button]").click();

    cy.get("[data-cy=back-button]").click();
    cy.get("[data-cy=categories-container]").should("be.visible");
    cy.get("[data-cy=categories-container]")
      .children()
      .should("have.length", 6);
    cy.get("[data-cy=categories-container-challenge-view]").should("not.exist");
  });
});
