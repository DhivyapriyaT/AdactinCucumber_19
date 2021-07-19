package com.adactin.stepdefinition;

import com.baseclass.BaseClass;
import com.pomclass.BookAHotelPOM;
import com.pomclass.LogOutPOM;
import com.pomclass.LoginPOM;
import com.pomclass.SearchHotelPOM;
import com.pomclass.SelectHotelPOM;

import cucumber.api.java.en.*;

public class StepDefinition extends BaseClass {
	//public static WebDriver driver = Runner.driver;
	
	@Given("^Launch the login page$")
	public void launch_the_login_page() throws Throwable {
		getMethod("http://adactinhotelapp.com/index.php");   
	}
	
	LoginPOM lpom = new LoginPOM(driver);
	@When("^Enter the valid UserName \"([^\"]*)\" in the username field$")
	public void enter_the_valid_UserName_in_the_username_field(String arg1) throws Throwable {
		inputValues(lpom.getUser(),arg1);
	}

	@When("^Enter the valid password \"([^\"]*)\" in the password field$")
	public void enter_the_valid_password_in_the_password_field(String arg1) throws Throwable {
	    inputValues(lpom.getPwd(), arg1);
	}
	
	@Then("^Clicked login button and navigated to the search hotel page$")
	public void clicked_login_button_and_navigated_to_the_search_hotel_page() throws Throwable {
		clickTheElement(lpom.getLogin());  
	}
	
	SearchHotelPOM spom = new SearchHotelPOM(driver);
	
	@Given("^User must be logged in successfully$")
	public void user_must_be_logged_in_successfully() throws Throwable {
	    
	}

	@When("^Select the location in the dropdown field$")
	public void select_the_location_dropdown_field() throws Throwable {
		selectValue(spom.getLocation(), "Sydney");   
	}

	@When("^Select Hotel from the dropdown$")
	public void select_Hotel_from_the_dropdown() throws Throwable {
		selectVisibleText(spom.getHotels(), "Hotel Sunshine");   
	}

	@When("^Select room type from the dropdown field$")
	public void select_room_type_from_the_dropdown_field() throws Throwable {
		selectVisibleText(spom.getRoomType(), "Super Deluxe");   
	}

	@When("^Select Number of Rooms from the dropdown$")
	public void select_Number_of_Rooms_from_the_dropdown() throws Throwable {
		selectValue(spom.getRoomNo(), "2");
	}

	@When("^Select Adults per Room from the dropdown$")
	public void select_Adults_per_Room_from_the_dropdown() throws Throwable {
		selectIndex(spom.getAdultPerRoom(), 2);
	}

	@When("^Select children per Room from the dropdown$")
	public void select_children_per_Room_from_the_dropdown() throws Throwable {
		selectIndex(spom.getChildrenPerRoom(), 0);
	}

	@Then("^Clicked on the Search button and it navigates to Select hotel page$")
	public void clicked_on_the_Search_button_and_it_navigates_to_Select_hotel_page() throws Throwable {
		clickTheElement(spom.getSearch());
	}

	SelectHotelPOM slpom = new SelectHotelPOM(driver);
	
	@Given("^Data should be provided in the Search Hotel page$")
	public void data_should_be_provided_in_the_Search_Hotel_page() throws Throwable {
	   
	}

	@When("^Select a hotel from the muliple hotel will getting displayed in this page$")
	public void select_a_hotel_from_the_muliple_hotel_will_getting_displayed_in_this_page() throws Throwable {
		clickTheElement(slpom.getRadio());
	}

	@Then("^Clicked the Continue button and navigated to the Book a hotel page$")
	public void clicked_the_Continue_button_and_navigated_to_the_Book_a_hotel_page() throws Throwable {
		clickTheElement(slpom.getContinueBtn());
	}

	BookAHotelPOM bPom = new BookAHotelPOM(driver);
	
	@Given("^Data should be displayed in Hotel Name,Location,Room type,Total Days,price per night as per the selection in the previous page$")
	public void data_should_be_displayed_in_Hotel_Name_Location_Room_type_Total_Days_price_per_night_as_per_the_selection_in_the_previous_page() throws Throwable {
	    
	}

	@When("^Input the value to the First Name field$")
	public void input_the_value_to_the_First_Name_field() throws Throwable {
		inputValues(bPom.getFirstName(), "DhivyaPriya");
	}

	@When("^Input the value to the Last name field$")
	public void input_the_value_to_the_Last_name_field() throws Throwable {
		inputValues(bPom.getLastName(), "T");
	}

	@When("^Input the value to the  Billing Address field$")
	public void input_the_value_to_the_Billing_Address_field() throws Throwable {
		inputValues(bPom.getAddress(), "48 Westcoast Lane");
	}

	@When("^Input the value to the Credit Card No field$")
	public void input_the_value_to_the_Credit_Card_No_field() throws Throwable {
		inputValues(bPom.getCardNum(), "1234567890123456");
	}

	@When("^Select the Credit Card Type from the dropdown$")
	public void select_the_Credit_Card_Type_from_the_dropdown() throws Throwable {
		selectValue(bPom.getCardType(), "MAST");
	}

	@When("^Select the Expiry Date from the dropdown$")
	public void select_the_Expiry_Date_from_the_dropdown() throws Throwable {
		selectValue(bPom.getExpMonth(), "5");
	}

	@When("^Select the Expiry Year from the dropdown$")
	public void select_the_Expiry_Year_from_the_dropdown() throws Throwable {
		selectVisibleText(bPom.getExpYear(), "2022");
	}

	@When("^Input the value to the CVV Number field$")
	public void input_the_value_to_the_CVV_Number_field() throws Throwable {
		inputValues(bPom.getCardCVV(), "123");
	}

	@Then("^Click on the Book Now button and it will navigated to the Booking Confirmation Page$")
	public void click_on_the_Book_Now_button_and_it_will_navigated_to_the_Booking_Confirmation_Page() throws Throwable {
		clickTheElement(bPom.getBookNowBtn());
	}
	
	LogOutPOM lopom = new LogOutPOM(driver);

	@Given("^All the datas are being displayed as per the selection in the previous page$")
	public void all_the_datas_are_being_displayed_as_per_the_selection_in_the_previous_page() throws Throwable {
	    
	}

	@When("^Click the My Itinerary button it navigates to the Booked Itinerary page$")
	public void click_the_My_Itinerary_button_it_navigates_to_the_Booked_Itinerary_page() throws Throwable {
		impWait(6);
		clickTheElement(lopom.getMyItinerary());
	}

	@When("^Click on the logout button$")
	public void click_on_the_logout_button() throws Throwable {
		clickMethod(lopom.getLogOut());
	}

	@Then("^User have successfully logged out,Click here to login again gets displayed$")
	public void user_have_successfully_logged_out_Click_here_to_login_again_gets_displayed() throws Throwable {
	    
	}


}
