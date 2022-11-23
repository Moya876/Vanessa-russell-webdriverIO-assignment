Vanessa Russell WebdriverIO Assignment

This automation suite covers the below automation flow on the Magento Luma theme E-commerce site. 

The execution of test scripts is as follows:

* Add a product to your cart -> Pay for Product -> Sign up -> View Order. This test can be found in the add to cart spec file.

* Additionally unhappy path tests were done which includes logging in with invalid credentials as well as signing up with an account that already exist. These tests can be found in the unhappy path spec file

* Data driven tests were executed in both the unhappy path test and Add to cart test scripts

* Testing on multiple broswer was also executed as a required implementation.

* To test on Firefox browser uncomment line 60 browserName: 'firefox', and comment out line 59 'browserName: 'chrome','