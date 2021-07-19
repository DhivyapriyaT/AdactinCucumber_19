package com.pomclass;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class BookAHotelPOM {
public static WebDriver driver;
@FindBy(xpath = "//input[@name='first_name']")
private WebElement firstName;
@FindBy(xpath = "//input[@name='last_name']")
private WebElement lastName;
@FindBy(xpath = "//textarea[@name='address']")
private WebElement address;
@FindBy(xpath = "//input[@name='cc_num']")
private WebElement cardNum;
@FindBy(xpath = "//select[@name='cc_type']")
private WebElement cardType;
@FindBy(xpath = "//select[@name='cc_exp_month']")
private WebElement expMonth;
@FindBy(xpath = "//select[@name='cc_exp_year']")
private WebElement expYear;
@FindBy(xpath = "//input[@name='cc_cvv']")
private WebElement cardCVV;
@FindBy(xpath = "//input[@name='book_now']")
private WebElement bookNowBtn;

public BookAHotelPOM(WebDriver driver2) {
	this.driver=driver2;
	PageFactory.initElements(driver2, this);
}
public static WebDriver getDriver() {
	return driver;
}
public WebElement getFirstName() {
	return firstName;
}
public WebElement getLastName() {
	return lastName;
}
public WebElement getAddress() {
	return address;
}
public WebElement getCardNum() {
	return cardNum;
}
public WebElement getCardType() {
	return cardType;
}
public WebElement getExpMonth() {
	return expMonth;
}
public WebElement getExpYear() {
	return expYear;
}
public WebElement getCardCVV() {
	return cardCVV;
}
public WebElement getBookNowBtn() {
	return bookNowBtn;
}


}
