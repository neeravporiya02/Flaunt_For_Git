package com.flaunt.util.common;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.math.BigDecimal;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Properties;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Util {

	private static final Logger flauntAPILog = LoggerFactory.getLogger("flauntAPILog");
	private static final Logger errorLog = LoggerFactory.getLogger("error");
	
	private static Properties resource = null;
	private static InputStream is = null;
	public static String fileName = null;
	
	
	public static boolean isNeitherNullNorEmpty(Object obj) {	
		boolean isNeitherNullNorEmpty = true;
		if (obj == null) {
			isNeitherNullNorEmpty = false;
		}
		if(obj instanceof String && ((String)obj).equals("")){
			isNeitherNullNorEmpty = false;
		}
		if(obj instanceof String && ((String)obj).equals("null")){
			isNeitherNullNorEmpty = false;
		}
		return isNeitherNullNorEmpty;
	}

	public static boolean isNeitherNullNorEmptyNorZero(Object obj) {
		boolean isNeitherNullNorEmptyNorZero = true;

		if (obj == null ) {
			isNeitherNullNorEmptyNorZero = false;
		} else if ((obj instanceof BigDecimal)) {
			if (BigDecimal.ZERO.equals(new BigDecimal(obj.toString()))) {
				isNeitherNullNorEmptyNorZero = false;
			}
		}
		return isNeitherNullNorEmptyNorZero;
	}

	public static String getValueFromResource(String propertyName, String defaultValue) {

		String strValue = null;
		if (propertyName != null && !"".equals(propertyName.trim())) {
			if (resource == null)
				initResourceBundle();
			if (resource != null) {
				strValue = resource.getProperty(propertyName);

				if (!Util.isNeitherNullNorEmpty(strValue))
					strValue = defaultValue;
			}
		}

		return strValue;
	}
	
	public static void initResourceBundle() {
		try {
			
			flauntAPILog.info("Inside initResourceBundle()");
			
			resource = new Properties();			
			File file = new File(fileName);
			is = new FileInputStream(fileName);
			resource.load(is);

			flauntAPILog.info("Exititng initResourceBundle()");
			
		} catch (Exception e) {
			errorLog.error(e.toString());

		}
		finally {
			try {
				is.close();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				errorLog.error(e.toString());
			}
		}

	}

	public  static void closeRsPstmtNdConn(ResultSet rs,PreparedStatement pstmt,Connection connection){		
		try {
			if(rs!=null)
				rs.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		rs =null;
		try {
			if(pstmt!=null)
				pstmt.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		pstmt = null;
		try {
			if(connection!=null)
				connection.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		connection = null;	
	}
	
	
}
