$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Tesing the booking functionality of the Adcatin Hotel Booking Website",
  "description": "",
  "id": "tesing-the-booking-functionality-of-the-adcatin-hotel-booking-website",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Checking the login functionality using valid Username and Password",
  "description": "",
  "id": "tesing-the-booking-functionality-of-the-adcatin-hotel-booking-website;checking-the-login-functionality-using-valid-username-and-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Launch the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter the valid UserName \"\u003cusername\u003e\" in the username field",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Enter the valid password \"\u003cpassword\u003e\" in the password field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Clicked login button and navigated to the search hotel page",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "tesing-the-booking-functionality-of-the-adcatin-hotel-booking-website;checking-the-login-functionality-using-valid-username-and-password;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 9,
      "id": "tesing-the-booking-functionality-of-the-adcatin-hotel-booking-website;checking-the-login-functionality-using-valid-username-and-password;;1"
    },
    {
      "cells": [
        "DhivyapriyaT",
        "dhivi@171234"
      ],
      "line": 10,
      "id": "tesing-the-booking-functionality-of-the-adcatin-hotel-booking-website;checking-the-login-functionality-using-valid-username-and-password;;2"
    },
    {
      "cells": [
        "Dhivyapriyaert",
        "dhivya@17"
      ],
      "line": 11,
      "id": "tesing-the-booking-functionality-of-the-adcatin-hotel-booking-website;checking-the-login-functionality-using-valid-username-and-password;;3"
    },
    {
      "cells": [
        "Dhivyapriya",
        "dhivi@17"
      ],
      "line": 12,
      "id": "tesing-the-booking-functionality-of-the-adcatin-hotel-booking-website;checking-the-login-functionality-using-valid-username-and-password;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 10,
  "name": "Checking the login functionality using valid Username and Password",
  "description": "",
  "id": "tesing-the-booking-functionality-of-the-adcatin-hotel-booking-website;checking-the-login-functionality-using-valid-username-and-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Launch the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter the valid UserName \"DhivyapriyaT\" in the username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Enter the valid password \"dhivi@171234\" in the password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Clicked login button and navigated to the search hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.launch_the_login_page()"
});
formatter.result({
  "duration": 6089249900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DhivyapriyaT",
      "offset": 26
    }
  ],
  "location": "StepDefinition.enter_the_valid_UserName_in_the_username_field(String)"
});
formatter.result({
  "duration": 257073300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dhivi@171234",
      "offset": 26
    }
  ],
  "location": "StepDefinition.enter_the_valid_password_in_the_password_field(String)"
});
formatter.result({
  "duration": 174493900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.clicked_login_button_and_navigated_to_the_search_hotel_page()"
});
formatter.result({
  "duration": 858417599,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Checking the login functionality using valid Username and Password",
  "description": "",
  "id": "tesing-the-booking-functionality-of-the-adcatin-hotel-booking-website;checking-the-login-functionality-using-valid-username-and-password;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Launch the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter the valid UserName \"Dhivyapriyaert\" in the username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Enter the valid password \"dhivya@17\" in the password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Clicked login button and navigated to the search hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.launch_the_login_page()"
});
formatter.result({
  "duration": 519843300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dhivyapriyaert",
      "offset": 26
    }
  ],
  "location": "StepDefinition.enter_the_valid_UserName_in_the_username_field(String)"
});
formatter.result({
  "duration": 145834900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dhivya@17",
      "offset": 26
    }
  ],
  "location": "StepDefinition.enter_the_valid_password_in_the_password_field(String)"
});
formatter.result({
  "duration": 109387800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.clicked_login_button_and_navigated_to_the_search_hotel_page()"
});
formatter.result({
  "duration": 567388200,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Checking the login functionality using valid Username and Password",
  "description": "",
  "id": "tesing-the-booking-functionality-of-the-adcatin-hotel-booking-website;checking-the-login-functionality-using-valid-username-and-password;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Launch the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter the valid UserName \"Dhivyapriya\" in the username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Enter the valid password \"dhivi@17\" in the password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Clicked login button and navigated to the search hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.launch_the_login_page()"
});
formatter.result({
  "duration": 510126199,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dhivyapriya",
      "offset": 26
    }
  ],
  "location": "StepDefinition.enter_the_valid_UserName_in_the_username_field(String)"
});
formatter.result({
  "duration": 156031201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dhivi@17",
      "offset": 26
    }
  ],
  "location": "StepDefinition.enter_the_valid_password_in_the_password_field(String)"
});
formatter.result({
  "duration": 125234301,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.clicked_login_button_and_navigated_to_the_search_hotel_page()"
});
formatter.result({
  "duration": 4447592100,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Checking the search fuctionality in the page with the valid credentials",
  "description": "",
  "id": "tesing-the-booking-functionality-of-the-adcatin-hotel-booking-website;checking-the-search-fuctionality-in-the-page-with-the-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "User must be logged in successfully",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "Select the location in the dropdown field",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Select Hotel from the dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Select room type from the dropdown field",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Select Number of Rooms from the dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Select Adults per Room from the dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Select children per Room from the dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Clicked on the Search button and it navigates to Select hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_must_be_logged_in_successfully()"
});
formatter.result({
  "duration": 1984101,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.select_the_location_dropdown_field()"
});
formatter.result({
  "duration": 150778400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.select_Hotel_from_the_dropdown()"
});
formatter.result({
  "duration": 189296500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.select_room_type_from_the_dropdown_field()"
});
formatter.result({
  "duration": 167458901,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.select_Number_of_Rooms_from_the_dropdown()"
});
formatter.result({
  "duration": 130314500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.select_Adults_per_Room_from_the_dropdown()"
});
formatter.result({
  "duration": 209001100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.select_children_per_Room_from_the_dropdown()"
});
formatter.result({
  "duration": 96279700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.clicked_on_the_Search_button_and_it_navigates_to_Select_hotel_page()"
});
formatter.result({
  "duration": 1245578300,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Verify whether the data displayed is same as the selected data in Search hotel page",
  "description": "",
  "id": "tesing-the-booking-functionality-of-the-adcatin-hotel-booking-website;verify-whether-the-data-displayed-is-same-as-the-selected-data-in-search-hotel-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "Data should be provided in the Search Hotel page",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "Select a hotel from the muliple hotel will getting displayed in this page",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "Clicked the Continue button and navigated to the Book a hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.data_should_be_provided_in_the_Search_Hotel_page()"
});
formatter.result({
  "duration": 4336500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.select_a_hotel_from_the_muliple_hotel_will_getting_displayed_in_this_page()"
});
formatter.result({
  "duration": 69595399,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.clicked_the_Continue_button_and_navigated_to_the_Book_a_hotel_page()"
});
formatter.result({
  "duration": 1149564600,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Checking the booking functionality  the Book a Hotel page",
  "description": "",
  "id": "tesing-the-booking-functionality-of-the-adcatin-hotel-booking-website;checking-the-booking-functionality--the-book-a-hotel-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 30,
  "name": "Data should be displayed in Hotel Name,Location,Room type,Total Days,price per night as per the selection in the previous page",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "Input the value to the First Name field",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "Input the value to the Last name field",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Input the value to the  Billing Address field",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Input the value to the Credit Card No field",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Select the Credit Card Type from the dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Select the Expiry Date from the dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Select the Expiry Year from the dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Input the value to the CVV Number field",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Click on the Book Now button and it will navigated to the Booking Confirmation Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.data_should_be_displayed_in_Hotel_Name_Location_Room_type_Total_Days_price_per_night_as_per_the_selection_in_the_previous_page()"
});
formatter.result({
  "duration": 1445100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.input_the_value_to_the_First_Name_field()"
});
formatter.result({
  "duration": 129097600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.input_the_value_to_the_Last_name_field()"
});
formatter.result({
  "duration": 93352800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.input_the_value_to_the_Billing_Address_field()"
});
formatter.result({
  "duration": 110214099,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.input_the_value_to_the_Credit_Card_No_field()"
});
formatter.result({
  "duration": 105365499,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.select_the_Credit_Card_Type_from_the_dropdown()"
});
formatter.result({
  "duration": 108457100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.select_the_Expiry_Date_from_the_dropdown()"
});
formatter.result({
  "duration": 107049700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.select_the_Expiry_Year_from_the_dropdown()"
});
formatter.result({
  "duration": 107020300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.input_the_value_to_the_CVV_Number_field()"
});
formatter.result({
  "duration": 100834399,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.click_on_the_Book_Now_button_and_it_will_navigated_to_the_Booking_Confirmation_Page()"
});
formatter.result({
  "duration": 67737901,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Checking the functionality of Booking Confirmation page and logout",
  "description": "",
  "id": "tesing-the-booking-functionality-of-the-adcatin-hotel-booking-website;checking-the-functionality-of-booking-confirmation-page-and-logout",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 42,
  "name": "All the datas are being displayed as per the selection in the previous page",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "Click the My Itinerary button it navigates to the Booked Itinerary page",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "Click on the logout button",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "User have successfully logged out,Click here to login again gets displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.all_the_datas_are_being_displayed_as_per_the_selection_in_the_previous_page()"
});
formatter.result({
  "duration": 1224601,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.click_the_My_Itinerary_button_it_navigates_to_the_Booked_Itinerary_page()"
});
formatter.result({
  "duration": 7798051000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.click_on_the_logout_button()"
});
formatter.result({
  "duration": 709104500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_have_successfully_logged_out_Click_here_to_login_again_gets_displayed()"
});
formatter.result({
  "duration": 41200,
  "status": "passed"
});
});