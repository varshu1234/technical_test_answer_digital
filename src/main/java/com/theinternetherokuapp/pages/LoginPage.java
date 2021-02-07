package com.theinternetherokuapp.pages;

import com.cucumber.listener.Reporter;
import com.theinternetherokuapp.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class LoginPage extends Utility {

    private static final Logger log = LogManager.getLogger(LoginPage.class.getName());
    //Locator
    @FindBy(xpath = "//input[@id='username']")
    WebElement _usernameField;
    @FindBy(xpath = "//input[@id='password']")
    WebElement _passwordField;
    @FindBy(xpath = "//i[contains(text(),'Login')]")
    WebElement _loginFeature;
    @FindBy(xpath = "//div[@id='flash']")
    WebElement _getLoginErrorMessage;
    @FindBy(xpath = "//i[contains(text(),'Logout')]")
    WebElement _logOutFeature;
    @FindBy(xpath = "//h2[contains(text(),'Login Page')]")
    WebElement _getLoginTextMessage;

    //Actions on locators
    public void enterUsername(String username) {
        Reporter.addStepLog("Entering Username" + username + "On username Field" + _usernameField.toString());
        log.info("Entering Username" + username + "On username Field" + _usernameField.toString());
        sendTextToElement(_usernameField, username);
    }

    public void enterPassword(String password) {
        Reporter.addStepLog("Entering Password " + password + "On password Field " + _passwordField.toString());
        log.info("Entering Password " + password + "On Password Field " + _passwordField.toString());
        sendTextToElement(_passwordField, password);
    }

    public void clickOnLogInButton() {
        Reporter.addStepLog("Clicking on Login Button " + _loginFeature.toString());
        log.info("Clicking on Login Button " + _loginFeature.toString());
        clickOnElement(_loginFeature);

    }

    public String getLoginErrorMessage() {
        Reporter.addStepLog("Getting Login error message" + _getLoginErrorMessage.toString());
        log.info("Getting Login error message" + _getLoginErrorMessage.toString());
        return getTextFromElement(_getLoginErrorMessage);
    }

    public void clickOnLogOutButton() {
        Reporter.addStepLog("Clicking on Log out Button " + _logOutFeature.toString());
        log.info("Clicking on Log out Button " + _logOutFeature.toString());
        clickOnElement(_logOutFeature);

    }


    public String getLoginText() {
        Reporter.addStepLog("Getting Login text message" + _getLoginTextMessage.toString());
        log.info("Getting Login text message" + _getLoginTextMessage.toString());
        return getTextFromElement(_getLoginTextMessage);
    }

}
