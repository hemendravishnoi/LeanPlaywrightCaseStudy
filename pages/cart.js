const {expect} = require('@playwright/test')

class Cart {
    constructor(page){
        this.page = page
        this.cartItem = 'div.cart_item'
        this.checkout = '#checkout'
    }

    async verifySelectedItemCount(selectedItemCount){
        let totalCartItems = await this.page.locator(this.cartItem).count()
        await expect(totalCartItems).toBe(selectedItemCount)
    }
    async clickCheckout(){
        await this.page.locator(this.checkout).click()
    }
}
module.exports = Cart;