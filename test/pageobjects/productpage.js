const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */

 class ProductPage extends Page {
    /**
     * define selectors using getter methods
     */
     get dropDownOption () {
        return $("#ui-id-6");
    }
    get productOption () {
        return $("#ui-id-25");
    }

    get productItem () {
        return $(".product-item-info");
    }
    
    // get addToCartBtn () {
    //     return $("#product-addtocart-button.action.primary.tocart");
    // }
    // get addToCartBtn () {
    //     return $("#product-addtocart-button");
    // }

    async addToCart() {
        await this.dropDownOption.click();
        await this.productOption.click();
        await this.productItem.click();
        await this.addToCartBtn.click()
 }

open () {
    return super.open('push-it-messenger-bag.html');
}
}

module.exports = new ProductPage();