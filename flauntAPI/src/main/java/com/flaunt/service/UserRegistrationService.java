package com.flaunt.service;

import java.util.List;

import com.flaunt.bean.UserRegistration;

public interface UserRegistrationService {
	
	public List<Object> registerUser(UserRegistration userRegistration);
	
	public List<Object> getCustomerDetailsById(int custId);
	
	public List<Object> deleteUserById(int custId);
}
