package com.theinternetherokuapp.utility;


import com.theinternetherokuapp.basepage.BasePage;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.*;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;


//Utility Methods to re use


public class Utility extends BasePage {


    public void windowScroll() {
        driver.findElement(By.tagName("html"));
        sendKeys(Keys.END);

    }

    private void sendKeys(Keys end) {
    }

    public void windowScrollTwo() {

        driver.findElement(By.tagName("html"));
        sendKeys(Keys.END);

    }

    public void windowScrollUp() {

        driver.findElement(By.tagName("html"));
        sendKeys(Keys.PAGE_UP);

    }


    public void clickOnElement(WebElement element) {
        element.click();
    }


    public String getTextFromElement(WebElement element) {
        return element.getText();
    }


    public void sendTextToElement(WebElement element, String str) {
        element.sendKeys(str);
    }

    public static String getScreenshot(WebDriver driver, String screenshotName) {
        String dateName = new SimpleDateFormat("yyyyMMddhhmmss").format(new Date());
        TakesScreenshot ts = (TakesScreenshot) driver;
        File source = ts.getScreenshotAs(OutputType.FILE);

        // After execution, you could see a folder "FailedTestsScreenshots" under screenshot folder
        String destination = System.getProperty("user.dir") + "/src/main/java/com/theinternetherokapp/screenshots/" + screenshotName + dateName + ".png";
        File finalDestination = new File(destination);
        try {
            FileUtils.copyFile(source, finalDestination);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return destination;
    }
}
