const {test} = require('@playwright/test');
const { LoginFunctionality } = require('../../page-objects/LOG_IN/login_functionality.js');
const { LogOutFunctionality } = require('../../page-objects/LOG_OUT/logout_functionality.js');
const { users } = require('../../test_data/login.data.js');
const { log } = require('node:console');

test('Verify user can logout', async ({page}) =>
{
    const logoutPage = new LogOutFunctionality(page);
    const loginPage  = new LoginFunctionality(page);

    const user = users.ORG_EXEC;

    await loginPage.login(user);
    await logoutPage.logout();
});
