Feature: Tesing the booking functionality of the Adcatin Hotel Booking Website

Scenario Outline: Checking the login functionality using valid Username and Password
	Given Launch the login page
	When  Enter the valid UserName "<username>" in the username field
	And   Enter the valid password "<password>" in the password field
	Then  Clicked login button and navigated to the search hotel page
Examples:
|username|password|
|DhivyapriyaT|dhivi@171234|
|Dhivyapriyaert|dhivya@17|
|Dhivyapriya|dhivi@17|
	
Scenario: Checking the search fuctionality in the page with the valid credentials
	Given User must be logged in successfully
	When  Select the location in the dropdown field
	And   Select Hotel from the dropdown 
	And   Select room type from the dropdown field
	And   Select Number of Rooms from the dropdown
	And   Select Adults per Room from the dropdown
	And   Select children per Room from the dropdown
    Then  Clicked on the Search button and it navigates to Select hotel page
    
Scenario: Verify whether the data displayed is same as the selected data in Search hotel page
	Given Data should be provided in the Search Hotel page
	When  Select a hotel from the muliple hotel will getting displayed in this page
	Then  Clicked the Continue button and navigated to the Book a hotel page
	
Scenario: Checking the booking functionality  the Book a Hotel page
	Given Data should be displayed in Hotel Name,Location,Room type,Total Days,price per night as per the selection in the previous page 
	When  Input the value to the First Name field
	And   Input the value to the Last name field
	And   Input the value to the  Billing Address field
	And   Input the value to the Credit Card No field
	And   Select the Credit Card Type from the dropdown
	And   Select the Expiry Date from the dropdown
	And   Select the Expiry Year from the dropdown
	And   Input the value to the CVV Number field
	Then  Click on the Book Now button and it will navigated to the Booking Confirmation Page
	
Scenario: Checking the functionality of Booking Confirmation page and logout
	Given All the datas are being displayed as per the selection in the previous page
	When  Click the My Itinerary button it navigates to the Booked Itinerary page
	And   Click on the logout button
	Then  User have successfully logged out,Click here to login again gets displayed
	
	
	