# Sauce Labs Case Study Automation - End-to-End Checkout Flow using Playwright

## Overview
This project contains an automated test suite for the Sauce Labs demo website. The suite covers the user flow of selecting 3 random items and completing the checkout process successfully. It is built using JavaScript/TypeScript with Playwright

## Features
- Automates login (if required)
- Selects 3 random products from the product list
- Completes the checkout process by filling user details
- Verifies order completion with assertions
- Generates detailed test reports using Allure (or built-in reporting)

## Prerequisites
- Node.js (version >= 14 recommended) (npm install)
- Latest Playwright needs to be installed (npm install --save-dev @playwright/test allure-playwright)
- Allure Report needs to be installed and set as default report (npm install -g allure-commandline --save-dev)
- Git installed on your system
- Supported browser installed (Chromium, Firefox, WebKit)

## Installation

1. Clone the repository: 
   ```bash
   [git clone https://github.com/hemendravishnoi/LeanPlaywrightCaseStudy.git]
2. Test Execution [npx playwright test]
3. Report Generation [allure serve allure-results]
