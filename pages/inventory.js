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

    /**
     * Selects a specified number of random items by clicking their "Add to Cart" buttons.
     * 
     * @param {number} noOfItemsToBeSelected - The number of random items to select.
     * @returns {Promise<void>} - Resolves when all items are selected and verification is done.
     * 
     * @throws Will throw an assertion error if the total available items are fewer than requested,
     *         or if the number of selected items does not match the requested number.
     */
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

    /**
     * Clicks on the shopping cart icon and verifies that the URL contains "cart".
     *
     * @returns {Promise<void>} Resolves when the click action and URL verification are complete.
     */
    async clickCart(){
        await this.page.locator(this.shoppingCart).click()
        await expect(this.page).toHaveURL(/.*cart.*/)
    }
}

module.exports = Inventory;