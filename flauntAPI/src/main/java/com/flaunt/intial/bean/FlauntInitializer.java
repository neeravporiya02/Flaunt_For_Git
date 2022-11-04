package com.flaunt.intial.bean;

import javax.annotation.PostConstruct;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.flaunt.configuration.AppConfiguration;
import com.flaunt.util.common.Util;

@Component
public class FlauntInitializer {

	@Autowired
	private AppConfiguration appConfiguration;
	
	private static final Logger flauntAPILog = LoggerFactory.getLogger("flauntAPI");
	
	
	@PostConstruct
	public void init() {
		flauntAPILog.info(appConfiguration.getConfig().getFile());
		System.out.println("File Path : "+appConfiguration.getConfig().getFile());
		
		Util.fileName = appConfiguration.getConfig().getFile();
		Util.initResourceBundle();
		try {
			Class.forName("com.flaunt.util.dbConn.DBConnection");
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
