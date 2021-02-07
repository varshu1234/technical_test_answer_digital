package com.theinternetherokuapp.pages;


import com.cucumber.listener.Reporter;
import com.theinternetherokuapp.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;


public class HomePage extends Utility {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());
    //Locator
    @FindBy(linkText = "Form Authentication")
    WebElement _formAuthenticationFeature;

    //Method created and action on element

    public void clickOnFormAuthenticationFeature() {
        Reporter.addStepLog("Clicking on form Authentication Feature" + _formAuthenticationFeature.toString());
        log.info("Clicking on form Authentication Feature" + _formAuthenticationFeature.toString());
        clickOnElement(_formAuthenticationFeature);
    }

}