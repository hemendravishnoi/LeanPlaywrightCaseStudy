const {expect} = require('@playwright/test')
class CheckoutTwo {
    constructor(page){
        this.page = page
        this.cartItem = 'div.cart_item'
        this.finish='#finish'
    }

    async verifySelectedItemCount(selectedItemCount){
        let totalCartItems = await this.page.locator(this.cartItem).count()
        await expect(totalCartItems).toBe(selectedItemCount)
    }

    async clcikFinish(){
        await this.page.locator(this.finish).click()
        await expect(this.page).toHaveURL(/.*checkout-complete.*/)
    }
}
module.exports = CheckoutTwo;