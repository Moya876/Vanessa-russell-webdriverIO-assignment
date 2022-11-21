const ProductPage = require('../pageobjects/productpage') 
const CartPage = require('../pageobjects/cart.page');
const checkOutPage = require('../pageobjects/checkout.page');
const shippingData = require('../data/shippingData');
const signUpPage = require ('../pageobjects/signUp.page');
const signUpData = require('../data/signupData');

describe.only('This test should add a product to cart and checkout', () => {
    //user should add a product to cart
    
    it('user should add a product to cart', async () => {
        await browser.url('https://magento.softwaretestingboard.com');
        await ProductPage.open();
        await $(`#product-addtocart-button`).click();
        expect (await $(`.message-success.success.message`)).toHaveTextContaining('You added Push It Messenger Bag to your shopping cart.');
        //await browser.debug();
    });

    
    it('should go to cart', async () => {
        await browser.url('https://magento.softwaretestingboard.com/push-it-messenger-bag.html');
        await CartPage.open();
        //await checkoutBtn.click();
        //await addToCart.checkout("");
        await $(`//button[@data-role='proceed-to-checkout']`).click();
        expect (await $(`//li[@id='shipping']//div[@data-role='title']`)).toHaveTextContaining('Shipping Address');
        await checkOutPage.open('checkOut');
        // await checkOutPage.shipping(shippingData.email, shippingData.firstname, shippingData.lastname, shippingData.company, shippingData.address, shippingData.city, shippingData.zipcode, shippingData.phonenumber);

        
        // await browser.debug();
    });
    const x = 0;
     it('should add shipping address and proceed to checkout', async () => {
        //expect (await $(`//li[@id='shipping']//div[@data-role='title']`)).toHaveTextContaining('Shipping Address');
        //await browser.url('https://magento.softwaretestingboard.com/checkout/#shipping');
    //     //await checkoutBtn.click();
    //     //await $(`ul.checkout.methods.items.checkout.items`).click();
           await checkOutPage.open('checkOutPage'); 
           await checkOutPage.checkOut(shippingData[x].email, shippingData[x].firstName, shippingData[x].lastName, shippingData[x].company, shippingData[x].address, shippingData[x].city, shippingData[x].postalCode, shippingData[x].phoneNumber);

        
      await browser.debug();
     });

    //sign up info being pulled from sign up data
    //the value of i determines which signUp data is being used. 0 and 1 was already created to make sure the test works
    //values for sign up data [0 1 2 3 4 5]
    const i = 1;
        it.skip(`should create an account ${signUpData[i].firstName}`, async () => {
            await signUpPage.open('signUpPage');
            await signUpPage.signup(signUpData[i].firstName, signUpData[i].lastName, signUpData[i].email, signUpData[i].password, signUpData[i].passwordConfirm);
            //await browser.debug();
        });

        it.skip('Should show order history', async ()=> {
            await browser.url('https://magento.softwaretestingboard.com/customer/account/');
            await browser.url('https://magento.softwaretestingboard.com/sales/order/history/');
            await $(`a.action.view`).click();
            expect(await $(`a.action.view`)).toHaveTextContaining('Order #');
            //await browser.debug();
        });
});