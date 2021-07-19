package com.adactin.helper;

public class FileReaderManager {

	
	public static FileReaderManager getInstanceFR() {
		FileReaderManager fr = new FileReaderManager();
		return fr;
	}

	
	//config.reader Constructor object
	
	public ConfigurationReader getInstanceCR() throws Throwable {
		ConfigurationReader cr = new ConfigurationReader();
		return cr;

	}
	
}
