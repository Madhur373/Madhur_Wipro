# Playwright E2E Testing - Day 12

## Synopsis
This project covers the basics of setting up Playwright and writing End-to-End (E2E) tests in JavaScript. The included tests demonstrate how to open websites, locate web elements (using XPath and Roles), interact with them (clicking links), and verify results (checking URLs, titles, and element visibility). 

## Quick Commands
Run these commands in your terminal to interact with the project:

* **Setup Playwright:** `npm init playwright@latest`
* **Run all tests:** `npx playwright test`
* **View test report:** `npx playwright show-report`

## Key Terms
* **Playwright:** Microsoft's automation tool for testing web applications.
* **Locator:** Playwright's way of finding elements (like buttons or text) on a webpage.
* **Assertion:** A check (`expect`) to see if the test actually passed or failed.
* **Fixture (`page`):** A built-in, isolated browser tab that Playwright gives to each test.

## Functions & Syntax Guide

| Function | What it does (Single Line) | Example Syntax |
| :--- | :--- | :--- |
| `test()` | Creates a new test block. | `test('test name', async ({ page }) => { ... });` |
| `page.goto()` | Opens a specific website URL. | `await page.goto('https://example.com');` |
| `page.locator()` | Finds an element using an XPath or CSS selector. | `page.locator('//*[@id="root"]');` |
| `page.getByRole()` | Finds an element by its type and name (like a link or button). | `page.getByRole('link', { name: /Explore/ });` |
| `.nth()` | Selects a specific element from a list of matches (0 is the first).| `locator.nth(1);` |
| `.click()` | Simulates a mouse click on the located element. | `await locator.click();` |
| `page.url()` | Gets the web address of the current page. | `const currentUrl = page.url();` |
| `expect().toBe()` | Checks if the actual result perfectly matches what you expected. | `expect(page.url()).toBe('expected_url');` |
| `expect().toHaveTitle()` | Checks if the webpage's title contains specific text. | `await expect(page).toHaveTitle(/Playwright/);` |
| `expect().toBeVisible()` | Checks if a specific element can be seen on the screen. | `await expect(locator).toBeVisible();` |