import {Page} from '@playwright/test';
import { BasePage } from './BasePage';  // first base page is class name and second base page is fine name

export class LoginPage extends BasePage {
    constructor(page: Page) {                       //constructor is alrady called in base page so we need to call super constructor to call the base page constructor

        super(page);
    }

    private userNameFileld = "#user-name";
    private passwordField = "#password";
    private loginButton = "#login-button";

    async login(username: string, password: string) {
        await this.page.fill(this.userNameFileld, username);
        await this.page.fill(this.passwordField, password);
        await this.page.click(this.loginButton);
    }
}