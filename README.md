# SwagLabs End-to-End Test Suite

## Table of Contents
- [Project Setup](#project-setup)
- [Running Tests](#running-tests)
- [Bonus Features](#bonus-features)
- [Test Reports](#test-reports)
- [GitHub Actions](#github-actions)
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
    git clone https://github.com/your-repo/swaglabs-playwright-tests.git
    cd swaglabs-playwright-tests
    ```

2. Install dependencies using `pnpm`:
    ```bash
    pnpm install
    ```

3. Install the required Playwright browsers:
    ```bash
    pnpm playwright install
    ```

## Running Tests

You can run the test suite using the following commands:

- Run all tests:
    ```bash
    pnpm test
    ```

- Run a specific test file:
    ```bash
    pnpm playwright test tests/login.spec.ts
    ```

- Run tests in headed mode (to see the browser):
    ```bash
    pnpm playwright test --headed
    ```

- Run tests in **slow motion** (to slow down interactions):
    ```bash
    pnpm playwright test --slow-mo 1000
    ```

## Bonus Features

### 1. GitHub Actions Workflow

This repository includes a GitHub Actions workflow that automatically runs the Playwright tests on every push to the `main` branch.

- The workflow configuration is located in `.github/workflows/test.yml`.
- It runs tests on **Ubuntu** using Node.js version 16.

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

### 3. ESLint Integration

ESLint is set up to ensure code quality and consistency across the project. The project uses **@typescript-eslint** to lint TypeScript files.

- To check for linting issues, run:
    ```bash
    pnpm eslint "**/*.ts"
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
├── components             # Contains reusable UI components
│   ├── CartItemComponent.ts# Reusable component for cart items
├── .github                # GitHub Actions workflow configuration
│   └── workflows
│       └── test.yml        # Workflow for running tests in CI/CD
├── eslint.config.js        # ESLint configuration file
├── playwright.config.ts    # Playwright configuration file
├── package.json            # Node.js dependencies and scripts
└── README.md               # Project documentation (this file)
