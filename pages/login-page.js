class LoginPage {
    constructor(page) {
        this.page = page
        this.username = "#user-name"
        this.password = "#password"
        this.submit = "#login-button"
    }

    async loginToApplication(username,password){
        await this.page.fill(this.username,username)
        await this.page.fill(this.password,password)
        await this.page.click(this.submit)
    }
}
module.exports = LoginPage;