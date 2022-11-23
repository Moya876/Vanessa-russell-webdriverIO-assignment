const ProductPage = require('../pageobjects/productpage'); 
const CartPage = require('../pageobjects/cart.page');
const checkOutPage = require('../pageobjects/checkout.page');
const shippingData = require('../data/shippingData');
const signUpPage = require ('../pageobjects/signUp.page');
const signUpData = require('../data/signupData');
const cartPage = require('../pageobjects/cart.page');
const { signup } = require('../pageobjects/signUp.page');
const accountPage = require('../pageobjects/account.page');
const createAccpage = require('../pageobjects/createAcc.page');
const createAccData = require('../data/createAccData');

describe('This test should add a product to cart, checkout, create an account then check for purchase in order history', () => {
    //user should add a product to cart
    
    it.only('user should purchase a product and confirm purchase in order history', async () => {
        //console.log(useremail);
        await browser.url('https://magento.softwaretestingboard.com');
        await ProductPage.open();
        await ProductPage.addToCartBtn.waitForClickable();
        await ProductPage.addToCartBtn.click();
        //User should be taken to shopping cart
        await ProductPage.shoppingCartLink.waitForDisplayed();
        await ProductPage.shoppingCartLink.click();
        await CartPage.proceedBtn.waitForDisplayed();
        await CartPage.proceedBtn.waitForClickable();
        await CartPage.proceedBtn.click();
        //User shipping information should be entered and order placed
        const x = 0;
        const useremail = shippingData[x].email;
        console.log(useremail);
        await checkOutPage.checkOut(useremail, shippingData[x].firstName, shippingData[x].lastName, shippingData[x].company, shippingData[x].address, shippingData[x].city, shippingData[x].postCode, shippingData[x].phoneNumber);
        expect (await $(`h1.page-title`)).toHaveTextContaining('Thank you for your purchase!');
        // user should sign up with the same email by clicking create account on order confirmation page
        await signUpPage.createActBtn.waitForClickable();
        await signUpPage.createActBtn.click(); 
        //After account creation user will be logged into my account page
        const i = 1;
        await createAccpage.createAcc(createAccData[i].password, createAccData[i].passwordConfirm);
        console.log();
        //My account order history will display the order that was placed
        await accountPage.open();
        await accountPage.myOrdersBtn.click();
        await accountPage.viewOrderBtn.click();
        // Order history should display the order number for the purchase that was made
        expect(await $(`a.action.view`)).toHaveTextContaining('Order #');
        //await browser.debug();
        //console.log();   
    })
});