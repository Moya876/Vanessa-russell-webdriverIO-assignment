const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */

class AccountPage extends Page {
    /**
     * define selectors using getter methods
     */
    get successMsg() {
        return $(".message.success.success.message");
    }
    get myOrdersBtn() {
        return $("//strong[normalize-space()='My Orders']");
    }
    get viewOrderBtn() {
        return $("//span[normalize-space()='View Order']");
    }

    async viewOrderHistory() {
        await this.successMsg.isDisplayed();
        await this.myOrdersBtn.click();
        await this.viewOrderBtn.click();

    }

    open() {
        return super.open('sales/order/history/');
    }
}

module.exports = new AccountPage();