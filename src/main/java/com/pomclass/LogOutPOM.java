package com.pomclass;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LogOutPOM {
	public static WebDriver driver;
	@FindBy(xpath = "//input[@name='my_itinerary']")
	private WebElement myItinerary;
	@FindBy(xpath = "//input[@name='logout']")
	private WebElement logOut;
	
	
	public LogOutPOM(WebDriver driver2) {
		this.driver=driver2;
		PageFactory.initElements(driver2, this);
	}
	public WebElement getMyItinerary() {
		return myItinerary;
	}
	public WebElement getLogOut() {
		return logOut;
	}

}
