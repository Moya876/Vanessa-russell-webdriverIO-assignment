const Page = require('./page');

class checkOutPage extends Page {

    get inputEmail () {
        return $('#customer-email');
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
    get inputPostalCode () {
        return $("input[name='postcode']");
    }
    get inputPhoneNumber () {
        return $("input[name='telephone']");
    }
    get nextBtn () {
        return $('.button.action.continue.primary');
    }

    async checkOut (email, firstname, lastname, company, address, city, postcode, phonenumber) {

            await this.inputEmail.setValue(email);
            await this.inputFirstname.setValue(firstname);
            await this.inputLastname.setValue(lastname);
            await this.inputCompany.setValue(company);
            await this.inputAddress.setValue(address);
            await this.inputCity.setValue(city);
            await this.inputPostalCode.setValue(postalcode);
            await this.inputPhoneNumber.setValue(phonenumber);
            await this.nextBtn.click();
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