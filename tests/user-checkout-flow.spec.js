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

test('Verify user completing a successful checkout.', async ({ page}) => {
    // Open URL
    await page.goto("https://www.saucedemo.com/")

    // Login Page object creation
    const loginpage = new LoginPage(page)
    //Login to application
    await loginpage.loginToApplication(LoginData.username,LoginData.password)

    // Assertion after successful login
    await expect(page.url()).toContain('inventory')
    //Inventory Page object creation
    const inventory = new Inventory(page)
    //Selection of 3 random items as per instruction
    await inventory.selectRandomItems(3)
    //Opening cart after successful selection
    inventory.clickCart()

    //Cart Page object creation
    const cart = new Cart(page)
    //Waiting for all network calls to get completed
    await page.waitForLoadState('networkidle')
    //Verification of selected item count
    cart.verifySelectedItemCount(3)
    //Checking out selected items
    cart.clickCheckout()

    //Check Out step one page object creation
    const checkoutOne = new CheckoutOne(page)
    //Filling user details
    checkoutOne.fillTheForm(UserData.FirstName,UserData.LastName,UserData.PostalCode)
    //Moving to Checkout Step Two page
    checkoutOne.clickContinue()

    //Check Out step two page object creation 
    const checkoutTwo = new CheckoutTwo(page)
    //Verification of selected item count
    checkoutTwo.verifySelectedItemCount(3)
    //Completion of checkout process
    checkoutTwo.clcikFinish()
    
    //Checkout Completion page object creation
    const checkoutComplete = new CheckoutCompletion(page)
    //Waiting for page to load completely
    await page.waitForSelector(checkoutComplete.message);
    //Verification of success message
    checkoutComplete.verifyCompletionMessage("Thank you for your order!")
}) 