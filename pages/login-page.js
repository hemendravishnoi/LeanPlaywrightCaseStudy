class LoginPage {
    constructor(page) {
        this.page = page
        this.username = "#user-name"
        this.password = "#password"
        this.submit = "#login-button"
    }

    /**
    * Login to application.
    * 
    * @param {string} username - The username to be entered into the login form.
    * @param {string} password - The password to be entered into the login form.
    * @returns {Promise<void>} - A promise that resolves when login actions are completed.
     */
    async loginToApplication(username,password){
        await this.page.fill(this.username,username)
        await this.page.fill(this.password,password)
        await this.page.click(this.submit)
    }
}module.exports = LoginPage;