const {test} = require('@playwright/test');
const { LoginFunctionality } = require('../page-objects/LOG_IN/login_functionality.js');
const { users } = require('../test_data/login.data.js');

test('Verify user can login',async ({page})=>
{
    const loginPage  = new LoginFunctionality(page);
    const user = users.ORG_EXEC;

    await loginPage.login(user);
});