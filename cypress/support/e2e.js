// Import commands.js using ES2015 syntax:
// import './commands'

// Import cypress-mochawesome-reporter
import 'cypress-mochawesome-reporter/register';

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Ignore uncaught exceptions to prevent tests from failing unexpectedly
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false;
}); 