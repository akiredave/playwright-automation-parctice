const { log } = require("node:console");

const LogOutLocators = (page)=> ({
    logoutBtn: page.getByText('Log Out'),

    // CSS Selectors:
    profileDropdown: page.locator('.profile-button')

    // Xpaths:

});

module.exports = { LogOutLocators };