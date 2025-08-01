// @ts-check
const {expect} = require('@playwright/test')
class CheckoutOne {
    constructor(page){
        this.page = page
        this.firstName = '#first-name'
        this.lastName = '#last-name'
        this.postalCode = '#postal-code'
        this.continue='#continue'
    }

    async fillTheForm(firstName,lastName,postalCode){
        await this.page.fill(this.firstName,firstName)
        await this.page.fill(this.lastName,lastName)
        await this.page.fill(this.postalCode,postalCode)
    }

    async clickContinue(){
        await this.page.locator(this.continue).click()
    }
}
module.exports = CheckoutOne;