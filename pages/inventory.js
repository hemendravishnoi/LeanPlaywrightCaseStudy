// @ts-check
const {expect} = require('@playwright/test')
const Util = require('../util/common-util')

class Inventory {
    constructor(page){
        this.page = page
        this.addToCartButton= '[id^="add-to-cart"]'
        this.shoppingCart = '#shopping_cart_container a.shopping_cart_link'
        this.shoppingCartBadge = '#shopping_cart_container a.shopping_cart_link span.shopping_cart_badge'
    }

    async selectRandomItems(noOfItemsToBeSelected){
        for(let selectedCount=0;selectedCount <noOfItemsToBeSelected; selectedCount++){
            let totalItemCount = await this.page.locator(this.addToCartButton).count()
            await expect(totalItemCount).toBeGreaterThan(noOfItemsToBeSelected-1);
            
            let randomIndex = await Util.getRandomInt(0,(totalItemCount-1))
            
            let element = this.page.locator(this.addToCartButton).nth(randomIndex)
            await element.click()
        }
        let noOfItemsSelected = await this.page.locator(this.shoppingCartBadge).textContent()
        await expect(parseInt(noOfItemsSelected?.trim())).toBe(noOfItemsToBeSelected)
    }
    async clickCart(){
        await this.page.locator(this.shoppingCart).click()
        await expect(this.page).toHaveURL(/.*cart.*/)
    }
}

module.exports = Inventory;