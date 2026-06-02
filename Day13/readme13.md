# Project Synopsis: Login Page Automated Testing

This project is a simple **Web Application setup to test a Login Page**. 
It includes building a backend server to host the login page, the frontend login form itself, and an automated testing script that acts like a real user trying to log in with different combinations of usernames and passwords.

---

## 📦 Imported Packages & Why They Are Used

Here are the specific packages imported at the top of your files and why they are necessary for this project:

### 1. In the Test Script (`example.spec.js`)
*   **`import { test, expect } from '@playwright/test';`**
    *   **`test`**: Imported to create a specific testing block. It tells Playwright, "Here is a scenario I want you to run on the login page."
    *   **`expect`**: Imported to make assertions (checks). It is used to verify if the login was successful or if the correct error message (e.g., "Invalid credentials") appeared on the screen.

### 2. In the Backend Server (`Index.js`)
*   **`const express = require('express');`**
    *   **Why:** Imports the Express.js framework. It is required to create the server that hosts your `login.html` file and processes the login data sent by the user.
*   **`const path = require('path');`**
    *   **Why:** A built-in Node.js package used to safely connect file paths. It ensures the server knows exactly where to find your HTML and CSS files inside the `public` folder, regardless of the operating system.
*   **`require('dotenv').config();`**
    *   **Why:** Imports a tool to read hidden environment variables from a `.env` file (like your server's `PORT`). This is a best practice to keep sensitive data and configurations out of your main code.

---

## 🛠️ Technologies Used (What & Why)

*   **Playwright:** A testing tool used to automatically open the browser, fill in the username/password fields, click login, and read the resulting messages.
*   **Node.js & Express.js:** The backend tools used to serve the login page to the browser and check if the entered credentials are correct.
*   **Vanilla JavaScript (Frontend):** Used inside the HTML page to intercept the form submission and send the login data to the server smoothly *without* refreshing the page.

---

## 💡 Key Testing Concepts

*   **Data-Driven Testing:** Instead of writing 4 separate tests for 4 different login scenarios, we put the test data in an array (`loginData`) and loop through it. The script automatically tests valid credentials, wrong passwords, and short usernames all in one go.
*   **Modular Code (`utils.js`):** We save the repeated action of "typing the username, typing the password, and clicking login" into a separate file so it can be reused easily in future tests.

---

## 💻 Simple Syntax Guide

### 1. Playwright (Importing and Testing)
```javascript
// Import the required testing tools
import { test, expect } from '@playwright/test';

test('Test the login page', async ({ page }) => {
    await page.goto('http://localhost:3000/login'); // Open the login page
    await page.locator('#username').fill('tom');    // Type username
    await page.locator('#loginBtn').click();        // Click the button
    
    // Check if the expected message is displayed
    await expect(page.locator('#msg')).toHaveText('Invalid credentials');
});
```

### 2. Express Server Middleware & Routing (Index.js)
// code
```JavaScript

const app = express();

// Middleware: Tells server to host CSS/HTML files from the "public" folder
app.use(express.static('public'));
// Middleware: Parses incoming JSON and Form Data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// POST API Route to handle the login logic
app.post('/loginwithcreds', (req, res) => {
    const { username, password } = req.body;
    if (username === "admin123") {
        res.send("Login successful");
    } else {
        res.status(401).send("Invalid credentials");
    }
});
```

### 3. Frontend Form Data & Fetch API (login.html)
//code

```JavaScript
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // Stops the page from refreshing on submit

    // FormData effortlessly extracts all input values from the HTML form
    const formData = new FormData(loginForm);
    const username = formData.get('username');
    const password = formData.get('password');

    // Fetch API sends the extracted data to the server API via POST
    const response = await fetch('/loginwithcreds', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });

    // Update the UI with the server's response
    msg.textContent = await response.text();
});
```