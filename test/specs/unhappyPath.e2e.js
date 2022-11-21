const LoginPage = require('../pageobjects/login.page');
const signUpPage = require('..//pageobjects/signUp.page');
const signUpData = require('../data/signupData');

//Unhappy path tests for which a user could misuse the product flow
describe.skip('unhappy path test', () => {
    //user should not be able to login with a correct email address but incorrect password
    
    it('should not be able to login with invalid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('vanessarussell1989@yahoo.com', 'Password3');
        expect (await $(`.message-error.error.message`)).toHaveTextContaining('Incorrect CAPTCHA');
        //await browser.pause(3000);
    });

    //user should not be able to create an account that already exist
    const i = 0;
    it(`should not create a new account ${signUpData[i].firstName}`, async () => {
        await signUpPage.open('signUpPage');
        await signUpPage.signup(signUpData[i].firstName, signUpData[i].lastName, signUpData[i].email, signUpData[i].password, signUpData[i].passwordConfirm);
        expect (await $(`.message-error.error.message`)).toHaveTextContaining('There is already an account with this email address');
    });
    
});
