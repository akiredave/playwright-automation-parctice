const {test} = require('@playwright/test');
const { LoginFunctionality } = require('../../page-objects/LOG_IN/login_functionality.js');
const { NavbarFunctionality } = require('../../page-objects/NAV_BAR/navbar_functionalities.js');
const { users } = require('../../test_data/login.data.js');
const { log } = require('node:console');

test('Verify user can navigate to Channel Info Tech page', async ({page}) =>
{
    const loginPage  = new LoginFunctionality(page);
    const navBar = new NavbarFunctionality(page);

    const user = users.ORG_EXEC;

    await loginPage.login(user);
    await navBar.click_home_dropdown();
    await navBar.click_channel_info_tech_btn();
});
