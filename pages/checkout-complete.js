// @ts-check
const {expect} = require('@playwright/test')

class CheckoutComplete {
    constructor(page){
        this.page = page
        this.message = '#checkout_complete_container h2'
    }

    async verifyCompletionMessage(message){
        let completionMessage = await this.page.locator(this.message).textContent()

        console.log(completionMessage)
        
        await expect(completionMessage).toBe(message)
    }
}
module.exports = CheckoutComplete;