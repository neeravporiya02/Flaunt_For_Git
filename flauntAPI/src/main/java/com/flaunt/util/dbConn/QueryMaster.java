package com.flaunt.util.dbConn;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.flaunt.util.common.Util;
import com.flaunt.util.constants.Constants.ConfigVariables;

public class QueryMaster {
	
	private static Logger log = LoggerFactory.getLogger("query");
	private static Logger errorLog = LoggerFactory.getLogger("queryError");

	StringBuffer logString = null;
	ResultSet rs = null;
	PreparedStatement prepstmt = null;
	
	public synchronized String changeQuery(String query){
		
		try{
		if(query.contains("nvl") || query.contains("NVL")){
			query = query.replaceAll("nvl", "coalesce");
			query = query.replaceAll("NVL", "coalesce");
		}
		
		if(query.contains("sysdate") || query.contains("SYSDATE")){
			query = query.replaceAll("sysdate", "current_timestamp");
			query = query.replaceAll("SYSDATE", "current_timestamp");
		}
		
		if(query.contains("trunc") || query.contains("TRUNC")){
			query = query.replaceAll("TRUNC", "date");
			query = query.replaceAll("trunc", "date");
		}
		
		if(query.contains("(15/1440)")){
			query = query.replaceAll("(15/1440)", "(15 * interval '1 minute')");
		}
		
		if(query.contains("DECODE") || query.contains("decode") ){

			String decode = null;
			String options = null;
			String replaceWithThis = null;

			Pattern pattern = Pattern.compile("decode\u0020*\\(.*?\\)",Pattern.CASE_INSENSITIVE);
			Matcher matcher  = pattern.matcher(query);
			while(matcher.find()){
				decode  = matcher.group();
				if(decode != null){
					Matcher matcher2 = Pattern.compile("\\((.*)\\)").matcher(decode);
					if(matcher2.find()){
						options = matcher2.group(1);
						replaceWithThis = formCaseQuery(options);
						query = query.replace(decode,replaceWithThis);
					}
				}
			}

		}
		
		}catch(Exception e){
			e.printStackTrace();
			//System.out.println(query);
		}
		
		//System.out.println(query);
		return query;
	}

	/***
	 * using options parameter; this form postgreSQL case 
	 * 
	 * @author Nivesh
	 * @param options
	 * @return
	 */
	private synchronized String  formCaseQuery(String options) {

		String [] values  = options.split(",");
		StringBuilder newQuery = new StringBuilder("CASE ").append(values[0].replaceAll("\\'"," "));
		int i = 1 ;
		while(i<values.length-1){
			newQuery.append(" WHEN ").append(values[i]).append(" THEN ");
			++i;
			newQuery.append(values[i] );
			++i;
		}
		newQuery.append(" ELSE ").append(values[i]).append(" END ");
		return newQuery.toString();
	}


	/**
	 * This method is used to run 'select' queries.
	 * @param query The select query which needs to be run on the database  
	 * @param param List of objects which form the parameters passed in the query 
	 * @param con Database connection object
	 * @param db Defines which DB needs to be accessed
	 * @param log Variable of log4j, used for logging into respective classes
	 * @return rs - ResultSet obtained after running the query
	 * @author Vikram
	 */
	public synchronized ResultSet select(String query, List<Object> param, Connection con  ){
		try {
			
			if(ConfigVariables.databaseType.equalsIgnoreCase("postgres")){
				query = changeQuery(query);
			}
						
			logString = new StringBuffer("DBUser: "+ con.getMetaData().getUserName() +" | "+ query).append("  with values ::");		
			prepstmt =  con.prepareStatement(query);

			if (Util.isNeitherNullNorEmpty(param)) {
				int q = param.size();
				for(int j = 1; j <= q; j++){
					Object temp = param.get(j-1);
					logString.append(temp).append("|");
					prepstmt.setObject(j, temp);
				}			
			}
				
			log.info(logString.toString()+"[QueryStartTime]=" + System.currentTimeMillis());
			
			rs = prepstmt.executeQuery();
		} catch (Exception e) {		
			errorLog.info(e.toString());
			e.printStackTrace();
			if(log != null){
				log.error("Exception while select : " + e.getMessage());
			}
		} finally {
			log.info(logString.toString()+"[QueryEndTime]=" + System.currentTimeMillis());
			try{
				if(param != null)	param.clear();
				param = null;
				query = null;				
			} catch (Exception e) {
				errorLog.info(e.toString());
				e.printStackTrace();				
			}			
		}
		return rs;
	}

	
	/* Code Added by Deep Kamdar on 28-Dec-2018 for taking a lock on table */
	/**
	 * This method is used to run 'select' queries.
	 * @param query The select query which needs to be run on the database  
	 * @param param List of objects which form the parameters passed in the query 
	 * @param con Database connection object
	 * @param db Defines which DB needs to be accessed
	 * @param log Variable of log4j, used for logging into respective classes
	 * @return rs - ResultSet obtained after running the query
	 * @author Vikram
	 */
	public synchronized int lockTable(String query, List<Object> param, Connection con  ){
		int count =1;
		boolean flag = false;
		try {
			
			if(ConfigVariables.databaseType.equalsIgnoreCase("postgres")){
				query = changeQuery(query);
			}
						
			logString = new StringBuffer("DBUser: "+ con.getMetaData().getUserName() +" | "+ query).append("  with values ::");		
			prepstmt =  con.prepareStatement(query);

			if (Util.isNeitherNullNorEmpty(param)) {
				int q = param.size();
				for(int j = 1; j <= q; j++){
					Object temp = param.get(j-1);
					logString.append(temp).append("|");
					prepstmt.setObject(j, temp);
				}			
			}
				
			log.info(logString.toString()+"[QueryStartTime]=" + System.currentTimeMillis());
			
				flag = prepstmt.execute();
				
		} catch (Exception e) {	
			count =0;
			errorLog.info(e.toString());
			e.printStackTrace();
			if(log != null){
				log.error("Exception while select : " + e.getMessage());
			}
		} finally {
			log.info(logString.toString()+"[QueryEndTime]=" + System.currentTimeMillis());
			try{
				if(param != null)	param.clear();
				param = null;
				query = null;				
			} catch (Exception e) {
				errorLog.info(e.toString());
				e.printStackTrace();				
			}			
		}
		return count;
	}
	/* Above Code Added by Deep Kamdar on 28-Dec-2018 for taking a lock on table */
	
	/**
	 * @param query The select query which needs to be run on the database  
	 * @param param List of objects which form the parameters passed in the query 
	 * @param db Defines which DB needs to be accessed
	 * @param log Variable of log4j, used for logging into respective classes	 
	 * @return updateinsertResult (int) - number of rows which got inserted/updated
	 */
	public int updateInsert(String query, List<Object> param,Connection con){	
		if(ConfigVariables.databaseType.equalsIgnoreCase("postgres")){
			query = changeQuery(query);
		}
		int updateinsertResult=0;
		boolean conToBeClosed = false;
		try {
			if (!Util.isNeitherNullNorEmpty(con) || con.isClosed()){
				conToBeClosed = true;
				con = DBConnection.getDBConnection();
			}
			logString = new StringBuffer(" DBUser: "+con.getMetaData().getUserName() +" | "+ query).append("  with values ::");
			prepstmt =  con.prepareStatement(query);

			if (param != null ) {
				int q = param.size();
				for(int j = 1; j <= q; j++){
					Object temp = param.get(j-1);
					logString.append(temp).append(",");
					prepstmt.setObject(j,temp);
				}			
			}

			log.info(logString.toString());	
			
			updateinsertResult = prepstmt.executeUpdate();		
			
			logString.setLength(0);
			logString.append("result of updateInsert ::").append(updateinsertResult);
			log.info(logString.toString());
		} catch (Exception e) {
			updateinsertResult = -1 ;
			errorLog.info(e.toString());
			log.error("Exception while updateInsert : " + e.getMessage());
			e.printStackTrace();
		}finally{
			try{
				if(conToBeClosed){
					if(con != null){
						con.close();				
					}
				}
				if(prepstmt != null){
					prepstmt.close();				
				}
				if(param!=null)
					param.clear();
				param = null;
				query = null;
			}catch(SQLException e){
				errorLog.info(e.toString());
				e.printStackTrace();
			}
		}		
		return updateinsertResult;	
	}
	
	
	/**
	 * @param query The select query which needs to be run on the database  
	 * @param param List of objects which form the parameters passed in the query 
	 * @param db Defines which DB needs to be accessed
	 * @param log Variable of log4j, used for logging into respective classes	 
	 * @return updateinsertResult (int) - number of rows which got inserted/updated
	 */
	public int updateInsertBatch(String query, List<List<Object>> param,Connection con){	
		if(ConfigVariables.databaseType.equalsIgnoreCase("postgres")){
			query = changeQuery(query);
		}
		int updateinsertResult = 0;
		boolean conToBeClosed = false;
		try {
			if (!Util.isNeitherNullNorEmpty(con) || con.isClosed()){
				conToBeClosed = true;
				con = DBConnection.getDBConnection();
			}
			
			logString = new StringBuffer(" DBUser: "+con.getMetaData().getUserName() +" | "+ query).append("  with values ::");
			prepstmt =  con.prepareStatement(query);

			if (param != null ) {
				int q = param.size();
				for(int j = 1; j <= q; j++){
					List<Object> temp = param.get(j-1);
					
					if (temp != null ) {
						int r = temp.size();
						for(int k = 1; k <= r; k++){
							Object value = temp.get(k-1);
							logString.append(value).append(",");
							prepstmt.setObject(k,value);
						}	
						prepstmt.addBatch();
					}
					
				}
			}

			log.info(logString.toString());	
			
			int[] updateinsertResultArray = prepstmt.executeBatch();	
			
			if(updateinsertResultArray.length > 0){
			
				for(int num : updateinsertResultArray){
				
					if(num <= 0){
						updateinsertResult = -1;
						break;
					}
					else{
						updateinsertResult = 1;
					}
			}
			}
			
			logString.setLength(0);
			logString.append("result of updateInsert ::").append(updateinsertResult);
			log.info(logString.toString());
		} catch (Exception e) {
			updateinsertResult = -1;
			errorLog.info(e.toString());
			log.error("Exception while updateInsert : " + e.getMessage());
			e.printStackTrace();
		}finally{
			try{
				if(conToBeClosed){
					if(con != null){
						con.close();				
					}
				}
				if(prepstmt != null){
					prepstmt.close();				
				}
				if(param!=null)
					param.clear();
				param = null;
				query = null;
			}catch(SQLException e){
				errorLog.info(e.toString());
				e.printStackTrace();
			}
		}		
		return updateinsertResult;	
	}
	

	
	/**
	 * This method closes preparedStatment variable, used for clearing resource.
	 */
	public void closeStatement() {		
			try {
				if(prepstmt != null)
					prepstmt.close();
			} catch (SQLException e) {
				errorLog.info(e.toString());
				e.printStackTrace();
			}
	}
	
}
