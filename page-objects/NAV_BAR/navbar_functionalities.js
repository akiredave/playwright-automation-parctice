const { navbarLocators } = require('./navbar.locators.js');
const { expect } = require('@playwright/test');

class NavbarFunctionality {
    constructor(page){
        this.page = page;
        this.loc = navbarLocators(page);
    }

    async click_home_dropdown(){
        await this.loc.homeBtn.click()
    }
}

module.exports = { NavbarFunctionality };