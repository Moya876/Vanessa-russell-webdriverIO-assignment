

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get errorMessage () {
        return $("div[data-bind='html: $parent.prepareMessageForHtml(message.text)']");
    }
}

module.exports = new SecurePage();
