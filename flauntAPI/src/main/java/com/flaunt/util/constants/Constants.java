package com.flaunt.util.constants;

import com.flaunt.util.common.Util;

public class Constants {
	
	public interface ConfigVariables {

	//For Read Only connection
	public static final String perstDbUrlReadOnly = Util.getValueFromResource(Constants.JDBCURLREAD,"perstDbUrlReadOnly");
	public static final String perstDbDriverReadOnly = Util.getValueFromResource(Constants.DRIVERCLASSNAMEREAD,"driverclass");
	public static final String perstDbUserReadOnly =Util.getValueFromResource(Constants.USERNAMEREAD,"perstDbUserReadOnly");
	public static final String perstDbPasswordReadOnly = Util.getValueFromResource(Constants.PASSWORDREAD,"perstDbPasswordReadOnly");
	public static final int perstDbConnPoolSizeReadOnly = Integer.parseInt(Util.getValueFromResource(Constants.CONNECTION_POOL_SIZE_READ,"READ_ONLY_POOL_SIZE"));
		
	//For Read Write connection
	public static final int perstDbConnPoolSize = Integer.parseInt(Util.getValueFromResource(Constants.CONNECTION_POOL_SIZE,"CONNECTION_POOL_SIZE"));
	public static final String perstDbUrlVal = Util.getValueFromResource(Constants.JDBCURL,"perstDbUrl");
	public static final String perstDbUserVal =Util.getValueFromResource(Constants.USERNAME,"perstDbUser");
	public static final String perstDbPasswordVal = Util.getValueFromResource(Constants.PASSWORD,"perstDbUser");
	public static final String perstDbDriverVal = Util.getValueFromResource(Constants.DRIVERCLASSNAME,"driverclass");
	 
	public static final String databaseType = Util.getValueFromResource(Constants.DATABASE_TYPE,"Oracle");
	
}
	//Keys For Read only
	public static final String DRIVERCLASSNAMEREAD="perstDbDriverReadOnly";
	public static final String JDBCURLREAD="perstDbUrlReadOnly";
	public static final String USERNAMEREAD="perstDbUserReadOnly";
	public static final String PASSWORDREAD="perstDbPasswordReadOnly";
	public static final String CONNECTION_POOL_SIZE_READ = "READ_ONLY_POOL_SIZE";
	
	//Keys For Read Write
	public static final String DRIVERCLASSNAME="perstDbDriver";
	public static final String JDBCURL="perstDbUrl";
	public static final String USERNAME="perstDbUser";
	public static final String PASSWORD="perstDbPassword";
	public static final String CONNECTION_POOL_SIZE = "POOL_SIZE";
		 
		 
	public static final String DATABASE_TYPE ="databaseType";
	
	public interface InsertStatus{
		 String SUCCESS = "200";
		 String FAILURE = "201";
		 String DBERROR = "203";
		 String SOME_OTHER_ERROR = "204";
		 String SUCCESS_MESSAGE = "SUCCESS!!";
		 String FAILURE_MESSAGE = "SOME ERROR OCCURED!!";
	}
	
	public interface UpdateStatus{
		 String SUCCESS = "200";
		 String FAILURE = "201";
	}
	
	public interface Response
	{
		public static final String SUCCESS="200";
		public static final String ERROR="201";
		public static final String MESSAGE="";
		
	}
}
