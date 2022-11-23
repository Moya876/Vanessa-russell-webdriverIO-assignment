const Page = require('./page');

class createAccPage extends Page {
    
    get inputPassword () {
        return $('#password');
    }

    get inputPasswordConfirmation () {
        return $('#password-confirmation');
    }

    get createActBtn () {
        return $("a[class='action primary'] span");
    }
    get accountBtn () {
        return $("button[title='Create an Account']");
    }
    async createAcc (password, passwordConfirm) {

            await this.inputPassword.setValue(password);
            await this.inputPasswordConfirmation.setValue(passwordConfirm);
            await this.accountBtn.click();
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

module.exports = new createAccPage();
