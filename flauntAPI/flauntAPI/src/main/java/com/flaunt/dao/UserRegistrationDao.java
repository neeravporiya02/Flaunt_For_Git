package com.flaunt.dao;

import java.util.List;

import com.flaunt.bean.UserRegistration;

public interface UserRegistrationDao {
	
	public List<Object> registerUser(UserRegistration userRegistration);
	
}
