class MyLocalSearchPage {
  // Element locators
  elements = {
    searchInput: () => cy.get('input[name="q"]'),
    searchButton: () => cy.get('button[name="btnK"]'),
    searchResults: () => cy.get('#search'),
    nonExistentElement: () => cy.get('#non-existent-element') // For intentionally failing test
  };

  // Navigation methods
  visit() {
    // Navigate to our local HTML file instead of external search engine
    cy.visit('cypress/fixtures/searchPage.html');
  }

  // Action methods
  search(term) {
    this.elements.searchInput().clear().type(term);
    this.elements.searchButton().click();
  }

  // Verification methods
  verifySearchResults() {
    this.elements.searchResults().should('be.visible');
  }

  // Method for intentional failure
  verifyNonExistentElement() {
    this.elements.nonExistentElement().should('be.visible');
  }
}

export default new MyLocalSearchPage(); 