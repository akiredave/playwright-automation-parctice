const { log } = require("node:console");

const LogOutLocators = (page)=> ({
    profileDropdown: page.getByRole('button').filter({ hasText: /^$/ })
});

module.exports = { LogOutLocators };