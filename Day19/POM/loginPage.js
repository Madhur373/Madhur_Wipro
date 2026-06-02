export class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = page.locator('#username');
        this.passInput = page.locator('#password');
        this.btn = page.locator('#loginBtn');
        // this.response = page.locator('#msg');
    }

    async navigate() {
        await this.page.goto('http://localhost:3000/login');
    }

    async fillForm(email, pass) {
        await this.usernameInput.fill(email);
        await this.passInput.fill(pass);
    }

    async submit() {
        await this.btn.click();
    }

    async getLoginResponse() {
        // return await this.response;
    }
}