package com.flaunt.daoImpl;

import java.sql.Connection;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.flaunt.bean.Login;
import com.flaunt.dao.LoginDao;
import com.flaunt.util.common.Util;
import com.flaunt.util.constants.Constants;
import com.flaunt.util.dbConn.DBConnection;
import com.flaunt.util.dbConn.QueryMaster;

@Service
public class LoginDaoImpl implements LoginDao{

	private static Logger errorlog = LoggerFactory.getLogger("error");
	private static Logger querylog = LoggerFactory.getLogger("query");
	private static Logger flauntAPILog = LoggerFactory.getLogger("flauntAPI");
	
	@Override
	public List<Object> login(Login login) {
		flauntAPILog.info("Inside LoginDaoImpl -> login");
		List<Object> result = new ArrayList<Object>();
		StringBuffer sbuf = null;
		ResultSet rs = null;
		QueryMaster qm = new QueryMaster();
		Connection con = null;
		
		try {
			if(Util.isNeitherNullNorEmpty(login)) {
				if(!Util.isNeitherNullNorEmpty(login.getEmail())) {
					result.add(Constants.Response.ERROR);
					result.add("Please Enter Email Address!");
					return result;
				}
				
				if(!Util.isNeitherNullNorEmpty(login.getPassword())) {
					result.add(Constants.Response.ERROR);
					result.add("Please Enter Password!");
					return result;
				}
				
			}
			
			con = DBConnection.getDBConnection("read");
			sbuf = new StringBuffer();
			
			sbuf.append("SELECT * FROM CUSTOMER "
					+ " WHERE email='"+login.getEmail()+"' AND password='"+login.getPassword()+"'");
			
			querylog.info("Query login :" + sbuf.toString());
			
			rs = qm.select(sbuf.toString(), null, con);

			if (rs.next()) {
				result.add(Constants.InsertStatus.SUCCESS);
				result.add("Login Successful !!");
				result.add(rs.getInt("cust_id"));
			} else {
				result.add(Constants.InsertStatus.FAILURE);
				result.add("You have entered an invalid username or password.");
			}
			
		} catch (Exception e) {
			errorlog.info(e.getMessage());
			e.printStackTrace();
			result.add(Constants.InsertStatus.DBERROR);
			result.add(Constants.InsertStatus.FAILURE_MESSAGE);
		} finally {
			Util.closeRsPstmtNdConn(rs, null, con);
			qm.closeStatement();
			qm = null;
			sbuf = null;
		}
		
		flauntAPILog.info("Inside LoginDaoImpl -> login");
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
