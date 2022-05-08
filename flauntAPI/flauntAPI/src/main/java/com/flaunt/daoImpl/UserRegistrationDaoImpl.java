package com.flaunt.daoImpl;

import java.sql.Connection;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import org.apache.commons.validator.routines.EmailValidator;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.flaunt.bean.UserRegistration;
import com.flaunt.dao.UserRegistrationDao;
import com.flaunt.util.common.Util;
import com.flaunt.util.constants.Constants;
import com.flaunt.util.dbConn.DBConnection;
import com.flaunt.util.dbConn.QueryMaster;

@Service
public class UserRegistrationDaoImpl implements UserRegistrationDao{

	private static Logger errorlog = LoggerFactory.getLogger("error");
	private static Logger querylog = LoggerFactory.getLogger("query");
	private static Logger flauntAPILog = LoggerFactory.getLogger("flauntAPI");
	
	@Override
	public List<Object> registerUser(UserRegistration userRegistration) {
		flauntAPILog.info("Inside UserRegistrationDAOImpl -> registerUser");
		List<Object> result = new ArrayList<Object>();
		StringBuffer sbuf = null;
		QueryMaster qm = new QueryMaster();
		List<Object> paramList = new ArrayList<Object>();
		Connection con = null;
		int count = 0;
		
		try {
			if(Util.isNeitherNullNorEmpty(userRegistration)) {
				if(!Util.isNeitherNullNorEmpty(userRegistration.getFirstName())) {
					result.add(Constants.Response.ERROR);
					result.add("Please Enter First Name!");
					return result;
				}
				
				if(!Util.isNeitherNullNorEmpty(userRegistration.getLastName())) {
					result.add(Constants.Response.ERROR);
					result.add("Please Enter Last Name!");
					return result;
				}
				
				if(!Util.isNeitherNullNorEmpty(userRegistration.getEmail())) {
					result.add(Constants.Response.ERROR);
					result.add("The Email Address field cannot be blank. Please Enter Email Address!");
					return result;
				}
				
				if (!EmailValidator.getInstance().isValid(userRegistration.getEmail())) {
					result.add(Constants.Response.ERROR);
					result.add("The Email Address is not Valid. Please Enter Valid Email Address!");
					return result;
				}
				
				if(!Util.isNeitherNullNorEmpty(userRegistration.getPassword())) {
					result.add(Constants.Response.ERROR);
					result.add("Please Enter Password!");
					return result;
				}
				
				if(!Util.isNeitherNullNorEmpty(userRegistration.getConfirmPassword())) {
					result.add(Constants.Response.ERROR);
					result.add("The Confirm Password field cannot be blank!");
					return result;
				}
				
				if(!userRegistration.getPassword().matches(userRegistration.getConfirmPassword())) {
					result.add(Constants.Response.ERROR);
					result.add("The Password and Confirmation Password do not match.");
					return result;
				}
			}
			
			con = DBConnection.getDBConnection();
			sbuf = new StringBuffer();
			
			sbuf.append("INSERT INTO CUSTOMER "
					+ " (cust_id, password, fname, lname, email, createdBy, createdDate, modifiedBy, modifiedDate) "
					+ " VALUES (?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP, ?, CURRENT_TIMESTAMP)");
			
			querylog.info("Query registerUser :" + sbuf.toString());
			paramList.add("2");
			paramList.add(userRegistration.getPassword());
			paramList.add(userRegistration.getFirstName());
			paramList.add(userRegistration.getLastName());
			paramList.add(userRegistration.getEmail());
			paramList.add(userRegistration.getFirstName()+" "+userRegistration.getLastName());
			paramList.add(userRegistration.getFirstName()+" "+userRegistration.getLastName());
			
			count = qm.updateInsert(sbuf.toString(), paramList, con);
			
			if(count >= 0){
				result.add(Constants.InsertStatus.SUCCESS);
				result.add(Constants.InsertStatus.SUCCESS_MESSAGE);
			} else {
				result.add(Constants.InsertStatus.FAILURE);
				result.add(Constants.InsertStatus.FAILURE_MESSAGE);
			}
			
		} catch (Exception e) {
			errorlog.info(e.getMessage());
			e.printStackTrace();
			result.add(Constants.InsertStatus.DBERROR);
			result.add(Constants.InsertStatus.FAILURE_MESSAGE);
		} finally {
			Util.closeRsPstmtNdConn(null, null, con);
			qm.closeStatement();
			qm = null;
			sbuf = null;
			paramList = null;
		}
		
		flauntAPILog.info("Inside UserRegistrationDAOImpl -> registerUser");
		return result;
	}
	
//	@Override
//	public void getEmplyee(UserRegistration employee) {
//		// TODO Auto-generated method stub
//		
//		flauntAPILog.info("Inside EmployeeDAOImpl -> getEmplyee");
//		
//		StringBuffer sbuf = null;
//		ResultSet rs = null;
//		sbuf = new StringBuffer();
//		QueryMaster qm = new QueryMaster();
//		Connection con = null;
//		
//		try{
//		
//			con = DBConnection.getDBConnection("read");
//
//		sbuf.append(" select * from md_user_mstr limit 100 ");
//
//		flauntAPILog.info("Query getEmplyee :" + sbuf.toString());
//
//		rs = qm.select(sbuf.toString(), null, con);
//
//		while (rs.next()) {
//			System.out.println("USER ID : "+rs.getString("USER_ID"));
//
//		}
//
//	} catch (Exception e) {
//		errorlog.info(e.getMessage());
//		e.printStackTrace();
//
//	} finally {
//		Util.closeRsPstmtNdConn(rs, null, con);
//		qm.closeStatement();
//		qm = null;
//	}
//		
//		flauntAPILog.info("Exiting EmployeeDAOImpl -> getEmplyee");
//		
//	}

}
