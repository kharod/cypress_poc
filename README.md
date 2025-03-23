# MyLocalSearch Automation with Cypress

![Cypress Tests](https://github.com/kharod/cypress_poc/actions/workflows/cypress-tests.yml/badge.svg)

This project demonstrates an automation testing suite for a Search UI using Cypress following the Page Object Model (POM) pattern. It includes successful tests, intentionally failing tests, and generates comprehensive reports with screenshots.

## Note About Testing Target

This implementation uses a local HTML file that simulates a search form. This approach was chosen because:

1. A local HTML file provides a consistent and reliable testing environment
2. The same automation techniques and patterns can be demonstrated without external dependencies

The concepts demonstrated here (Page Object Model, data-driven testing, etc.) can be adapted to test any search interface with minimal changes.

## Project Structure

```
/cypress-search-automation  
  ├── cypress/  
  │   ├── e2e/  
  │   │   ├── tests/ (Contains test cases)  
  │   │   │   ├── myLocalSearch.spec.js  
  │   │   ├── pages/ (Page Object Model - Stores locators & methods)  
  │   │   │   ├── MyLocalSearchPage.js  
  │   ├── fixtures/ (Stores test data in JSON format)  
  │   │   ├── searchData.json
  │   │   ├── searchPage.html (Local HTML file for testing)  
  │   ├── screenshots/ (Stores failure screenshots)  
  │   ├── reports/ (Stores test reports)  
  ├── cypress.config.js (Cypress configuration)  
  ├── package.json (Project dependencies)  
  ├── README.md (Project documentation)  
```

## Features

- **Page Object Model (POM)** implementation for better maintainability
- **Data-driven** testing approach using fixture files
- **Automatic screenshots** on test failures
- **Comprehensive reporting** with Mochawesome
- Includes both successful and failing tests to demonstrate error handling
- **Continuous Integration** with GitHub Actions

## Test Cases

1. **Test Case 1: Successful MyLocalSearch Search**
   - Navigate to search page
   - Enter a search query from the data file
   - Click the "Search" button
   - Verify that search results are displayed

2. **Test Case 2: Failed Test (Negative Scenario for Reporting Demo)**
   - Navigate to search page
   - Enter a query
   - Verify a non-existent element (this test intentionally fails)

## Prerequisites

- Node.js (v12 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd cypress_poc  # Use your repository name
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Git Setup

If you're starting from scratch, you can use the provided initialization script:

```bash
./init-git.sh
```

This script will:
- Initialize a Git repository
- Add all files to Git
- Make an initial commit
- Provide instructions for setting up a remote repository

## Running Tests

### Headless Mode

```bash
npm test
```
or
```bash
npm run cy:run
```

### Interactive Mode

```bash
npm run test:open
```
or
```bash
npm run cy:open
```

## Test Reports

After test execution, HTML reports are generated in the `cypress/reports` folder. Open the HTML file in any browser to view detailed test results, including:

- Test summary (passed/failed counts)
- Test duration
- Screenshots of failed tests (intentionally failing test is included to demonstrate this feature)
- Detailed logs of each test step

### Sample Report Output

The reports demonstrate:
- 1 successful test (Search functionality working correctly)
- 1 intentionally failing test (for demonstration of error handling)
- Automatic screenshot capture of the failed test
- Detailed execution information and timing

## Failure Screenshots

Screenshots of failed tests are automatically captured and stored in the `cypress/screenshots` folder. These are also embedded in the HTML report for easy reference.

In this project, we deliberately included a failing test (Test Case 2) that attempts to verify a non-existent element. This demonstrates how Cypress handles test failures, captures screenshots, and includes them in the test report.

## Best Practices Implemented

- Separation of concerns with Page Object Model
- Data-driven testing with fixtures
- Automatic waiting with Cypress (no sleep/hard waits)
- Proper element locator strategies
- Error handling with screenshots
- Comprehensive reporting

## Continuous Integration

This project includes GitHub Actions configurations for continuous integration. The tests automatically run:

- On every push to the `main` branch
- On every pull request to the `main` branch
- Manually through the GitHub Actions tab

### CI Pipeline Features

- Automatically sets up Node.js environment
- Installs dependencies
- Runs Cypress tests in headless mode
- Uploads test reports as artifacts
- Uploads screenshots of failed tests as artifacts

### GitHub Actions Implementations

Two different GitHub Actions workflow implementations are provided:

1. **Standard Implementation** (cypress-tests.yml):
   - Manually sets up the Node.js environment
   - Installs Chrome browser
   - Runs tests using npm scripts
   - Handles artifacts upload

2. **Cypress GitHub Action** (cypress-tests-alternative.yml):
   - Uses the official Cypress GitHub Action
   - Simplified configuration
   - Handles environment setup automatically
   - Same artifact handling capabilities

#### Why Two Different Workflows?

Both workflows accomplish the same task but take different approaches to running Cypress tests:

**When to use the Standard Implementation:**
- When you need complete control over the environment setup
- For complex projects with custom dependencies
- If you need to execute custom commands before/after tests
- If you want transparent visibility into each step of the process
- When you have specific browser or system requirements

**When to use the Cypress GitHub Action:**
- For simpler projects where you just want to run tests
- To reduce configuration complexity and potential errors
- To benefit from optimizations made by the Cypress team
- For faster execution (uses smart caching)
- If you're new to GitHub Actions

The Cypress GitHub Action is actually recommended for most projects due to its simplicity and maintenance by the Cypress team. The standard implementation is provided as an alternative for more complex scenarios or educational purposes.

### Viewing CI Results

1. Go to the GitHub repository
2. Click on the "Actions" tab
3. Select the most recent workflow run
4. Download the artifacts to view test reports and screenshots 


## Author

Gurpreet Kaur
