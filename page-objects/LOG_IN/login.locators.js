const loginLocators = (page) => ({
  username: page.getByPlaceholder('Username'),
  password: page.getByPlaceholder('Password'),
  loginButton: page.getByRole('button', { name: 'Sign in' })
});

module.exports = { loginLocators };