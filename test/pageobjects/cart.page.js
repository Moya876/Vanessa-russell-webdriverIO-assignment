const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */

class CartPage extends Page {
    /**
     * define selectors using getter methods
     */
    get cartIconBtn() {
        return $(".action.showcart");
    }

    get cartIconMenu() {
        return $(".action.showcart.active");
    }
    get checkoutBtn() {
        return $("#top-cart-btn-checkout");
    }
    get proceedBtn() {
        return $("button[data-role='proceed-to-checkout']");
    }
     async proceedToCheckout() {
        await this.cartIconBtn.click();
        await this.cartIconMenu.waitForDisplayed();
        await this.checkoutBtn.click();
        //await this.proceedBtn.click();

    }

    open() {
        return super.open('checkout/cart');
    }
}

module.exports = new CartPage();