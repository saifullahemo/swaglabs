# SwagLabs End-to-End Test Suite

## Table of Contents
- [Project Setup](#project-setup)
- [Running Tests](#running-tests)
- [Linting](#linting)
- [Folder Structure](#folder-structure)

---

## Project Setup

### Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v16 or later)
- [pnpm](https://pnpm.io/) package manager

### Installation

1. Clone the repository:
    ```bash
    https://github.com/saifullahemo/swaglabs.git
    cd swaglabs
    ```

2. Install dependencies using `pnpm`:
    ```bash
    pnpm i
    ```

3. Install the required Playwright browsers:
    ```bash
    pnpm create playwright
    ```

## Running Tests

You can run the test suite using the following commands:

- Run all tests:
    ```bash
    pnpm exec playwright test
    ```

- Run a specific test file:
    ```bash
    pnpm exec playwright test tests/login.spec.ts
    ```

- Run tests in headed mode (to see the browser):
    ```bash
    pnpm playwright test --headed
    ```


### 2. Test Reports

You can generate HTML test reports by using Playwright’s built-in reporting functionality.

- To generate an HTML report:
    ```bash
    pnpm playwright test --reporter=html
    ```

- After running the tests, open the report:
    ```bash
    pnpm playwright show-report
    ```

## Folder Structure

The repository follows the **Page Object Model (POM)** design pattern. Below is an overview of the folder structure:

```bash
├── tests                  # Contains all test files
│   ├── login.spec.ts       # Test cases for login functionality
│   ├── addToCart.spec.ts   # Test cases for adding items to the cart
│   ├── checkout.spec.ts    # Test cases for completing the checkout process
├── pages                  # Contains page object classes
│   ├── LoginPage.ts        # Encapsulates login page elements and actions
│   ├── InventoryPage.ts    # Encapsulates inventory page elements and actions
│   ├── CartPage.ts         # Encapsulates cart page elements and actions
│   ├── CheckoutPage.ts     # Encapsulates checkout page elements and actions
├── eslint.config.js        # ESLint configuration file
├── playwright.config.ts    # Playwright configuration file
├── package.json            # Node.js dependencies and scripts
└── README.md               # Project documentation (this file)
