/// <reference types="cypress" />
import MyLocalSearchPage from '../pages/MyLocalSearchPage';

describe('MyLocalSearch Functionality', () => {
  beforeEach(() => {
    // Load test data from fixture file
    cy.fixture('searchData').as('searchData');
  });

  it('Test Case 1: Successful MyLocalSearch Search', function() {
    // Navigate to search page
    MyLocalSearchPage.visit();

    // Perform search using data from fixture
    MyLocalSearchPage.search(this.searchData.successfulSearch.query);

    // Verify search results are displayed
    MyLocalSearchPage.verifySearchResults();
  });

  it('Test Case 2: Failed Test (Negative Scenario for Reporting Demo)', function() {
    // This test is intentionally designed to fail to showcase error handling
    
    // Navigate to search page
    MyLocalSearchPage.visit();

    // Perform search using data from fixture
    MyLocalSearchPage.search(this.searchData.failingSearch.query);

    // Attempt to verify a non-existent element (this will fail)
    MyLocalSearchPage.verifyNonExistentElement();
  });
}); 