const Page = require('./page');

class signUpPage extends Page {
    
    get inputFirstname () {
        return $('#firstname');
    }
    get inputLastname () {
        return $('#lastname');
    }

    get inputEmail () {
        return $('#email_address');
    }

    get inputPassword () {
        return $('#password');
    }

    get inputPasswordConfirmation () {
        return $('#password-confirmation');
    }

    get signUpSubmit () {
        return $('.primary');
    }

    async signup (firstname, lastname, email, password, passwordConfirm) {

            await this.inputFirstname.setValue(firstname);
            await this.inputLastname.setValue(lastname);
            await this.inputEmail.setValue(email);
            await this.inputPassword.setValue(password);
            await this.inputPasswordConfirmation.setValue(passwordConfirm);
            await this.signUpSubmit.click();
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to create an account using firstname, lastname, email and password
     */

    /**
     * overwrite specific options to adapt it to page object
     */
     open () {
        return super.open('customer/account/create');
    }
}

module.exports = new signUpPage();
