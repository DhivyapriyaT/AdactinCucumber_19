package com.adactin.helper;

import java.io.File;
import java.io.FileInputStream;
import java.util.Properties;

public class ConfigurationReader {
	public static Properties p; 
	public ConfigurationReader() throws Throwable {
		File f = new File("C:\\Users\\lenovo\\eclipse-workspace\\AdactinCucumber\\src\\test\\java\\com\\adactin\\properties\\configuration.properties");
		
		FileInputStream fis = new FileInputStream(f);
		
		p = new Properties();
		p.load(fis);
	}
	
	public String getBrowser() {
		String browser = p.getProperty("browser");
		return browser;

	}
	public String getUrl() {
		String url = p.getProperty("url");
		return url;
	}
	public String getUserName() {
		String username = p.getProperty("username");
		return username;

	}
	public String getPassword() {
		String password = p.getProperty("password");
		return password;
	}
	public String getCardNo() {
		String cardno = p.getProperty("cardno");
		return cardno;
	}
	public String getCVV() {
		String cvv = p.getProperty("cvv");
		return cvv;
	}
}
