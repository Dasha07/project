// Load dependecies
var assert = require('chai').assert,
test = require('selenium-webdriver/testing'),
chromedriver = require('chromedriver'),
webdriver = require('selenium-webdriver');
const {Builder, By, Key, until} = require('selenium-webdriver');
var driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build();


describe('PayEver Tests', function () {
	this.timeout(90000);
it('Login and shop',async function () {
	
try{
// Login into Application
await driver.get('https://commerceos.staging.devpayever.com/');
console.log('https://commerceos.staging.devpayever.com/ url has been launched')
console.log('type user name ')
await driver.wait(until.elementLocated(By.css("input[qa-id='control.email']"))).sendKeys("aqa@payever.org");
console.log('type password ')
await driver.wait(until.elementLocated(By.css("input[qa-id='control.plainPassword']"))).sendKeys("Aqacool123!");
console.log('click on login button ')
await driver.wait(until.elementLocated(By.css(".mat-button-wrapper"))).click();
console.log('logged into application ')

await driver.wait(until.elementLocated(By.xpath("//h2[text()='AA']"))).click();

// CLick on Apps
await driver.wait(until.elementLocated(By.xpath("//span[text()='Apps']"))).click();

//Click on Shop
await driver.wait(until.elementLocated(By.xpath("//div[@data-pe-app='shop']/div"))).click();

//Click on Themes
//await driver.wait(until.elementLocated(By.xpath("//span[text()='Themes']"))).click();

//Click on Add Theme
//await driver.wait(until.elementLocated(By.xpath("//mat-card-content[contains(text(),'+ Add Theme')]"))).click();

//Click on A button
await driver.wait(until.elementLocated(By.xpath("//button[@pe-qa-builder='text']"))).click();
console.log('Clicked on Text button ')


async function getEditorCanvasShadowRoot() {
        let shadowHost;
        await (shadowHost = driver.findElement(By.css('.pe-editor-canvas')));
        return driver.executeScript("return arguments[0].shadowRoot", shadowHost);
      }

async function clickEditorCanvasShadowDomElement(shadowDomElement) {
        let shadowRoot;
        let element;
        await (shadowRoot = getEditorCanvasShadowRoot());
		console.log(shadowRoot);
        await shadowRoot.then(async (result) => {
          await (element = result.findElement(By.css("pe-editor-element-anchors svg")).click());
			console.log(element);
        });
        
        return element;
      };
	  console.log('click and type')
		clickEditorCanvasShadowDomElement('pe-editor-element-anchors svg');

		
		console.log('getText ')	  
		console.log(await driver.wait(until.elementLocated(By.xpath("//pe-text-editor//span"))).getText());

}finally{
	driver.quit();
}	
});

});


