package com.flaunt.daoImpl;

import java.sql.Connection;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.flaunt.bean.Registration;
import com.flaunt.dao.RegistrationDAO;
import com.flaunt.util.common.Util;
import com.flaunt.util.dbConn.DBConnection;
import com.flaunt.util.dbConn.QueryMaster;

@Service
public class RegistrationDAOImpl implements RegistrationDAO{

	private static Logger errorlog = LoggerFactory.getLogger("error");
	private static Logger flauntAPILog = LoggerFactory.getLogger("flauntAPILog");
	
	
	@Override
	public void getEmplyee(Registration employee) {
		// TODO Auto-generated method stub
		
		flauntAPILog.info("Inside EmployeeDAOImpl -> getEmplyee");
		
		StringBuffer sbuf = null;
		ResultSet rs = null;
		sbuf = new StringBuffer();
		QueryMaster qm = new QueryMaster();
		Connection con = null;
		
		try{
		
			con = DBConnection.getDBConnection("read");

		sbuf.append(" select * from md_user_mstr limit 100 ");

		flauntAPILog.info("Query getEmplyee :" + sbuf.toString());

		rs = qm.select(sbuf.toString(), null, con);

		while (rs.next()) {
			System.out.println("USER ID : "+rs.getString("USER_ID"));

		}

	} catch (Exception e) {
		errorlog.info(e.getMessage());
		e.printStackTrace();

	} finally {
		Util.closeRsPstmtNdConn(rs, null, con);
		qm.closeStatement();
		qm = null;
	}
		
		flauntAPILog.info("Exiting EmployeeDAOImpl -> getEmplyee");
		
	}

}
