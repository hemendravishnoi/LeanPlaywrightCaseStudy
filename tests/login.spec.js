// @ts-check
const {test,expect} = require('@playwright/test')
const LoginPage = require('../pages/login-page')
const Inventory = require('../pages/inventory')
const Cart = require('../pages/cart')
const CheckoutOne = require('../pages/checkout-step-one')
const CheckoutTwo = require('../pages/checkout-step-two')
const CheckoutCompletion = require('../pages/checkout-complete')
const LoginData = require('../test-data/login-test-data.json')
const UserData = require('../test-data/user-test-data.json')

test('Verify login to application', async ({ page}) => {
    await page.goto("https://www.saucedemo.com/")

    const loginpage = new LoginPage(page)

    await loginpage.loginToApplication(LoginData.username,LoginData.password)

    await expect(page.url()).toContain('inventory')

    const inventory = new Inventory(page)

    await inventory.selectRandomItems(3)

    inventory.clickCart()

    const cart = new Cart(page)

    await page.waitForLoadState('networkidle')
    
    cart.verifySelectedItemCount(3)

    cart.clickCheckout()

    const checkoutOne = new CheckoutOne(page)

    checkoutOne.fillTheForm(UserData.FirstName,UserData.LastName,UserData.PostalCode)

    checkoutOne.clickContinue()

    const checkoutTwo = new CheckoutTwo(page)

    checkoutTwo.verifySelectedItemCount(3)

    checkoutTwo.clcikFinish()

   

    //await page.waitForTimeout(2000);

    const checkoutComplete = new CheckoutCompletion(page)

     await page.waitForSelector(checkoutComplete.message);

    checkoutComplete.verifyCompletionMessage("Thank you for your order!")
    
}) 