package com.theinternetherokuapp.pages;

import com.cucumber.listener.Reporter;
import com.theinternetherokuapp.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;


public class InfiniteScrollPage extends Utility {

    private static final Logger log = LogManager.getLogger(InfiniteScrollPage.class.getName());

    //Locator
    @FindBy(xpath = "//a[contains(text(),'Infinite Scroll')]")
    WebElement _infiniteScrollFeature;
    @FindBy(xpath = "//h3[contains(text(),'Infinite Scroll')]")
    WebElement _getInfiniteText;

    //Actions on elements
    public void clickOnInfiniteScrollFeature() {
        Reporter.addStepLog("Clicking on Infinite Scroll Feature" + _infiniteScrollFeature.toString());
        log.info("Clicking on Infinite Scroll Feature" + _infiniteScrollFeature.toString());
        clickOnElement(_infiniteScrollFeature);
    }

    public void scrollDown() {
        Reporter.addStepLog("scroll Down window ");
        log.info("scroll Down window ");
        windowScroll();
    }

    public void scrollDownTwo() {
        Reporter.addStepLog("scroll Down window ");
        log.info("scroll Down window ");
        windowScrollTwo();
    }

    public void scrollUp() {
        Reporter.addStepLog("scroll up window ");
        log.info("scroll up window ");
        windowScrollUp();
    }

    public String getInfiniteText() {
        Reporter.addStepLog("Getting Infinite text message" + _getInfiniteText.toString());
        log.info("Getting Infinite text message" + _getInfiniteText.toString());
        return getTextFromElement(_getInfiniteText);
    }
}