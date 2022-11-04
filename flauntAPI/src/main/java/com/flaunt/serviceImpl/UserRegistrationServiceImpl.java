package com.flaunt.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.flaunt.bean.UserRegistration;
import com.flaunt.dao.UserRegistrationDao;
import com.flaunt.service.UserRegistrationService;

@Service
public class UserRegistrationServiceImpl implements UserRegistrationService{

	@Autowired
	private UserRegistrationDao userRegistrationDAO;
	
	@Override
	public List<Object> registerUser(UserRegistration userRegistration) {
		return userRegistrationDAO.registerUser(userRegistration);
	}
	
	@Override
	public List<Object> getCustomerDetailsById(int custId) {
		return userRegistrationDAO.getCustomerDetailsById(custId);
	}
	
	@Override
	public List<Object> deleteUserById(int custId) {
		return userRegistrationDAO.deleteUserById(custId);
	}
}
