const { Builder, By, until, Capabilities } = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');
const chrome = require('selenium-webdriver/chrome');
const { assert } = require('chai');

/* Test the Landing Page for proper elements */
// This works for firefox and chrome if Capabilities are set separately.
// (Just had to update google-chrome-stable).
describe('Landing Page', function() {
  let driver;
  this.timeout(60000);
  
  before(function() {
    driver = new Builder()
    .withCapabilities(Capabilities.chrome())
    .build();

    return driver.get('http://127.0.0.1:3001');
  });

  after(function() {
    driver.quit();
  });

  it('should have the title, Chatbox App', function() {
    return driver.getTitle()
    .then(title => {
      assert.equal(title, 'Chatbox App');
    });
  });

  it('should have a signin button', function() {
    return driver.findElement(By.id('signin'));
  });

  it('should have a register button', function() {
    return driver.findElement(By.id('register'));
  });

})