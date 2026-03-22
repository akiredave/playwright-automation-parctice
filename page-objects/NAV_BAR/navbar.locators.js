const navbarLocators = (page) => ({
    homeBtn: page.getByRole('button', {name: 'Home'}),
    channelinfotechBtn: page.getByRole('link', {name: 'Channel Info Tech'})
});

module.exports = { navbarLocators };