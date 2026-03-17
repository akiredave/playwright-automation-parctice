const navbarLocators = (page) => ({
    homeBtn: page.getByRole('button', {name: 'Home'})
});

module.exports = { navbarLocators };