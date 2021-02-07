package com.theinternetherokuapp.cucumber;

import com.cucumber.listener.Reporter;
import com.theinternetherokuapp.basepage.BasePage;
import com.theinternetherokuapp.propertyreader.PropertyReader;
import com.theinternetherokuapp.utility.Utility;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

import java.io.IOException;


public class Hooks extends BasePage {

    @Before
    public void openBrowser(){
        selectBrowser(PropertyReader.getInstance().getProperty("browser"));
        Reporter.assignAuthor("Bionic", "Varsha Patel");

    }

    @After
    public void tearDown(Scenario scenario){
        if(scenario.isFailed()){
            String screenShotPath = Utility.getScreenshot(driver, scenario.getName().replace(" ", "_"));
            try {
                Reporter.addScreenCaptureFromPath(screenShotPath);
            } catch (IOException e) {
                e.printStackTrace();
            }

        }
        driver.quit();
    }
}
