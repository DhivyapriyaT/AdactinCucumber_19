package com.pomclass;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPOM {
public static WebDriver driver;

@FindBy(xpath = "//input[@name='username']")
private WebElement user;
@FindBy(xpath = "//input[@name='password']")
private WebElement pwd;
@FindBy(xpath = "//input[@name='login']")
private WebElement login;



public LoginPOM(WebDriver driver2) {
	this.driver=driver2;
	PageFactory.initElements(driver2, this);
}

public static WebDriver getDriver() {
	return driver;
}
public WebElement getUser() {
	return user;
}
public WebElement getPwd() {
	return pwd;
}
public WebElement getLogin() {
	return login;
}














}
