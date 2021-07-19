package com.pomclass;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SearchHotelPOM {
public static WebDriver driver;

@FindBy(xpath = "//select[@name='location']")
private WebElement location;
@FindBy(xpath = "//select[@name='hotels']")
private WebElement hotels;
@FindBy(xpath = "//select[@name='room_type']")
private WebElement roomType;
@FindBy(xpath = "//select[@name='room_nos']")
private WebElement roomNo;
@FindBy(xpath = "//select[@name='adult_room']")
private WebElement adultPerRoom;
@FindBy(xpath = "//select[@name='child_room']")
private WebElement childrenPerRoom;

@FindBy(xpath = "//input[@name='Submit']")
private WebElement search;

public SearchHotelPOM(WebDriver driver2) {
	this.driver = driver2;
	PageFactory.initElements(driver2, this);
}
public WebElement getSearch() {
	return search;
}
public void setSearch(WebElement search) {
	this.search = search;
}

public static WebDriver getDriver() {
	return driver;
}
public WebElement getLocation() {
	return location;
}
public WebElement getHotels() {
	return hotels;
}
public WebElement getRoomType() {
	return roomType;
}
public WebElement getRoomNo() {
	return roomNo;
}
public WebElement getAdultPerRoom() {
	return adultPerRoom;
}
public WebElement getChildrenPerRoom() {
	return childrenPerRoom;
}



}
