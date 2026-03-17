const { test } = require('@playwright/test');
const { LogOutLocators } = require('./logout.locators.js');

class LogOutFunctionality {
    constructor(page) {
        this.page = page;
        this.loc = LogOutLocators(page);
    }

    async logout() {
        await this.loc.profileDropdown.click();
        await this.loc.logoutBtn.click();
    };
};
module.exports = { LogOutFunctionality };