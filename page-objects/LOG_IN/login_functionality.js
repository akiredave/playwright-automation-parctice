const {loginLocators} = require('./login.locators.js');
const { expect } = require('@playwright/test');


class LoginFunctionality {
  constructor(page) {
    this.page = page;
    this.loc = loginLocators(page);
  }

  async login(user) {
    await this.page.goto('https://staging-hqzen.cxrole.com/signin');
    await this.loc.username.fill(user.username);
    await this.loc.password.fill(user.password);
    await this.loc.loginButton.click();
    await expect(this.page).toHaveTitle('Home - HQZen');
  }

}

module.exports = { LoginFunctionality };
