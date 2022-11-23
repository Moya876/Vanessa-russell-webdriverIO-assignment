const Page = require('./page');

class checkOutPage extends Page {

    get inputEmail () {
        return $('#checkout-step-shipping #customer-email');
    }

    get inputFirstname () {
        return $(`input[name='firstname']`);
    }
    get inputLastname () {
        return $("input[name='lastname']");
    }
    get inputCompany () {
        return $("input[name='company']");
    }
   
    get inputAddress() {
        return $("input[name='street[0]']");
    }

    get inputCity () {
        return $("input[name='city']");
    }
    get dropDownMenu () { return $("select[name='region_id']") }
    get dropDownMenuOption1 () { return $("option[value='1']") }

    get inputPostCode () {
        return $("input[name='postcode']");
    }
    get inputPhoneNumber () {
        return $("input[name='telephone']");  
    }

    get shippingMethod () {
        return $("input[value='tablerate_bestway']");  
    }
    get nextBtn () {
        return $('.button.action.continue.primary');
    }
     get placeOrderBtn () {
         return $('button.action.primary.checkout');
     }
    

    async checkOut (email, firstname, lastname, company, address, city, postcode, phonenumber,) {
            await this.inputEmail.waitForDisplayed();
            await this.inputEmail.setValue(email);
            await this.inputFirstname.setValue(firstname);
            await this.inputLastname.setValue(lastname);
            await this.inputCompany.setValue(company);
            await this.inputAddress.setValue(address);
            //await browser.debug();
            await this.inputCity.setValue(city);
            await this.dropDownMenu.click();
            await this.dropDownMenuOption1.click();
            //await browser.debug();
            await this.inputPostCode.setValue(postcode);
            await this.inputPhoneNumber.setValue(phonenumber);
            await this.shippingMethod.click();
            await this.nextBtn.click();
            await this.placeOrderBtn.waitForDisplayed();
            await this.placeOrderBtn.click();
        } 

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to create an account using firstname, lastname, email and password
     */

    /**
     * overwrite specific options to adapt it to page object
     */
     open () {
        return super.open('checkout/#shipping');
    }
}

module.exports = new checkOutPage();