package com.flaunt.dao;

import java.util.List;

import com.flaunt.bean.Login;

public interface LoginDao {
	
	public List<Object> login(Login login);
	
}
