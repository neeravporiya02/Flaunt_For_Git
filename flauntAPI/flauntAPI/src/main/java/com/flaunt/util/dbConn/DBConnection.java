package com.flaunt.util.dbConn;

import java.sql.Connection;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.flaunt.util.common.Util;
import com.flaunt.util.constants.Constants.ConfigVariables;
import com.mchange.v2.c3p0.ComboPooledDataSource;

public class DBConnection {
		
	private static final Logger errorLog = LoggerFactory.getLogger("error");
	
	private static ComboPooledDataSource cpdsFlaunt = new ComboPooledDataSource() ;
	private static ComboPooledDataSource cpdsFlauntRead = new ComboPooledDataSource() ;
	
	static{	
		try{
			//dbConnection for Read-Write
			cpdsFlaunt.setDriverClass(ConfigVariables.perstDbDriverVal);
			cpdsFlaunt.setJdbcUrl(ConfigVariables.perstDbUrlVal);
			cpdsFlaunt.setUser(ConfigVariables.perstDbUserVal);
			cpdsFlaunt.setPassword(ConfigVariables.perstDbPasswordVal);
			cpdsFlaunt.setMaxStatements(100);
			cpdsFlaunt.setIdleConnectionTestPeriod(30*60);
			cpdsFlaunt.setMaxPoolSize(ConfigVariables.perstDbConnPoolSize);
			cpdsFlaunt.setMaxIdleTime(Integer.parseInt(Util.getValueFromResource("maxIdle","60")));
			cpdsFlaunt.setMaxIdleTimeExcessConnections(Integer.parseInt(Util.getValueFromResource("maxIdleConn","10")));
						
			//dbConnection for Read Only
			cpdsFlauntRead.setDriverClass(ConfigVariables.perstDbDriverReadOnly);
			cpdsFlauntRead.setJdbcUrl(ConfigVariables.perstDbUrlReadOnly);
			cpdsFlauntRead.setUser(ConfigVariables.perstDbUserReadOnly);
			cpdsFlauntRead.setPassword(ConfigVariables.perstDbPasswordReadOnly);
			cpdsFlauntRead.setMaxStatements(100);
			cpdsFlauntRead.setIdleConnectionTestPeriod(30*60);
			cpdsFlauntRead.setMaxPoolSize(ConfigVariables.perstDbConnPoolSizeReadOnly);
			cpdsFlauntRead.setMaxIdleTime(Integer.parseInt(Util.getValueFromResource("maxIdle","60")));
			cpdsFlauntRead.setMaxIdleTimeExcessConnections(Integer.parseInt(Util.getValueFromResource("maxIdleConn","10")));
			
			/*cpdsLot.setInitialPoolSize(10);
			cpdsLot.setMinPoolSize(10);
			cpdsLot.setMaxPoolSize(2);
			cpdsLot.setAcquireRetryAttempts(0);
			cpdsLot.setAcquireRetryDelay(500);
			cpdsLot.setCheckoutTimeout(0);
			cpdsLot.setAcquireIncrement(5);
			cpdsLot.setAutomaticTestTable("rms_details");
			cpdsLot.setTestConnectionOnCheckin(false);
			cpdsLot.setIdleConnectionTestPeriod(3600);
			cpdsLot.setMaxIdleTime(0);
			cpdsLot.setMaxStatementsPerConnection(100);
			cpdsLot.setBreakAfterAcquireFailure(false);*/
		}
		catch (Exception e) {
			errorLog.info(e.toString());
			e.printStackTrace();
		}
	}
	
	
	/************** Database Connection *************/
	
	public static Connection getDBConnection(String ...a) throws Exception {
		Connection conn = null;
		
		int conRetryAttempt=0;
		int conReadRetryAttempt=0;
		
		
		if(a.length==0){
		/*conn = cpdsLot.getConnection();
			if(conn == null || conn.isClosed()){			
				for(int i=0;i<30;i++){
					Thread.sleep(500);
					conn = cpdsLot.getConnection();
					if(conn != null){
						break;
					}				
				}
			}*/	
			
			errorLog.info("Current Idle Persistance connections before acquiring "+cpdsFlaunt.getNumIdleConnectionsAllUsers());
			errorLog.info("Current Busy Persistence connections before acquiring "+cpdsFlaunt.getNumBusyConnectionsAllUsers());
			
			if(cpdsFlaunt.getNumConnectionsAllUsers()<cpdsFlaunt.getMaxPoolSize() ||  cpdsFlaunt.getNumIdleConnectionsAllUsers()>2)
			{
				conn = cpdsFlaunt.getConnection();
				conRetryAttempt=0;
				errorLog.info("connection received without waiting");
			}
			else{
				if(conn == null || conn.isClosed()){
					errorLog.info("Not able to acquire Persistance connection, idle connection < 2 ");
					
					for(int i=0;i<30;i++){
						Thread.sleep(500);
						if(cpdsFlaunt.getNumConnectionsAllUsers()<cpdsFlaunt.getMaxPoolSize() || cpdsFlaunt.getNumIdleConnectionsAllUsers()>2)
						{
							conn = cpdsFlaunt.getConnection();
							conRetryAttempt =0;
						}
							if(conn != null){
								errorLog.info("Persistance connection received ");
								break;
						}				
					}
					
					if(conn == null || conn.isClosed()){
						conRetryAttempt++;
						if(conRetryAttempt>5){
							errorLog.info("Soft Resetting Number Of Connections for persistance");
							cpdsFlaunt.softResetAllUsers();
							conRetryAttempt =0;
							getDBConnection(a);
						  	}
						}
				}
			}
			
			if(conn==null){
				errorLog.info("Server Busy. No Persist DB Connection.");
			}
			
		}
		//else is for Read Only DBConnection
		else
		{
			/*conn = cpdsLotRead.getConnection();
			if(conn == null || conn.isClosed()){			
				for(int i=0;i<30;i++){
					Thread.sleep(500);
					conn = cpdsLotRead.getConnection();
					if(conn != null){
						break;
					}				
				}
			}*/
			
			errorLog.info("Current Idle Persistance Read connections before acquiring "+cpdsFlauntRead.getNumIdleConnectionsAllUsers());
			errorLog.info("Current Busy Persistence Read connections before acquiring "+cpdsFlauntRead.getNumBusyConnectionsAllUsers());
			
			if(cpdsFlauntRead.getNumConnectionsAllUsers()<cpdsFlauntRead.getMaxPoolSize() ||  cpdsFlauntRead.getNumIdleConnectionsAllUsers()>2)
			{
				conn = cpdsFlauntRead.getConnection();
				conReadRetryAttempt=0;
				errorLog.info("read connection received without waiting");
			}
			else{
				if(conn == null || conn.isClosed()){
					errorLog.info("Not able to acquire Persistance Read connection, idle connection < 2 ");
					
					for(int i=0;i<30;i++){
						Thread.sleep(500);
						if(cpdsFlauntRead.getNumConnectionsAllUsers()<cpdsFlauntRead.getMaxPoolSize() || cpdsFlauntRead.getNumIdleConnectionsAllUsers()>2)
						{
							conn = cpdsFlauntRead.getConnection();
							conReadRetryAttempt =0;
						}
							if(conn != null){
								errorLog.info("Persistance Read connection received ");
								break;
						}				
					}
					
					if(conn == null || conn.isClosed()){
						conReadRetryAttempt++;
						if(conReadRetryAttempt>5){
							errorLog.info("Soft Resetting Number Of Read Connections for persistance");
							cpdsFlauntRead.softResetAllUsers();
							conReadRetryAttempt=0;
							getDBConnection(a);
						  	}
						}
				}
			}
			
			if(conn==null){
				errorLog.info("Server Busy. No Persist DB Read Connection.");
			}
			
			
			
		}
		
		return conn;
	}
	
	
	/*public static String logMethod(Throwable e1 ){
		StringWriter errors = new StringWriter();
		e1.printStackTrace(new PrintWriter(errors));
		return errors.toString();
	}*/

}
