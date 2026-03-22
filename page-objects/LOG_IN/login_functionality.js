const {loginLocators} = require('./login.locators.js');
const { expect } = require('@playwright/test');


class LoginFunctionality {
  constructor(page) {
    this.page = page;
    this.loc = loginLocators(page);
  }

  async navigate_to_sign_in_page() {
    await this.page.goto('/signin');
  }

  async login(user) {
    await this.navigate_to_sign_in_page();
    await this.loc.username.fill(user.username);
    await this.loc.password.fill(user.password);
    await this.loc.loginButton.click();
    await expect(this.page).toHaveTitle('Home - HQZen');
  }

  async verify_login_page() {
    await this.navigate_to_sign_in_page();
    await expect(this.loc.username).toBeVisible();
    await expect(this.loc.password).toBeVisible();
    await expect(this.loc.loginButton).toBeVisible();
  }

}

module.exports = { LoginFunctionality };
