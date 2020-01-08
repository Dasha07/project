import "chromedriver";
import "geckodriver";
import {Builder} from "selenium-webdriver";

export default function getDriver(browser) {
    var browsername = browser == undefined ? 'chrome' : browser;
    switch (browsername.toUpperCase()) {
        case 'FIREFOX':
            return new Builder().forBrowser('firefox').build();
        case 'CHROME':
            return new Builder().forBrowser('chrome').build();
        default:
            return new Builder().forBrowser('chrome').build();
    }
};