const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */

 class CartPage extends Page {
    /**
     * define selectors using getter methods
     */
     get cartIcon () {
        return $(".action.showcart");
    }
    get checkoutBtn () {
        return $("#top-cart-btn-checkout");
    }
    get proceedBtn () {
        return $("button[data-role='proceed-to-checkout']");
    }

    async CartPage() {
        await this.cartIcon.click();
        await this.checkoutBtn.click();
        await this.proceedBtn.click();

}

open () {
    return super.open('checkout/cart');
}
}

module.exports = new CartPage();