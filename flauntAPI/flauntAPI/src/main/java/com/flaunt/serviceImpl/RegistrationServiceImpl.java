package com.flaunt.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.flaunt.bean.Registration;
import com.flaunt.dao.RegistrationDAO;
import com.flaunt.service.RegistrationService;

@Service
public class RegistrationServiceImpl implements RegistrationService{

	@Autowired
	private RegistrationDAO employeeDAO;
	
	@Override
	public void getEmployee(Registration employee) {
		// TODO Auto-generated method stub
		
		employeeDAO.getEmplyee(employee);
		
	}

	
}
