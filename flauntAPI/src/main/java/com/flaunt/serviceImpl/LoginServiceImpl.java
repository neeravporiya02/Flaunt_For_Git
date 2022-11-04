package com.flaunt.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.flaunt.bean.Login;
import com.flaunt.dao.LoginDao;
import com.flaunt.service.LoginService;

@Service
public class LoginServiceImpl implements LoginService{

	@Autowired
	private LoginDao loginDao;
	
	@Override
	public List<Object> login(Login login) {
		return loginDao.login(login);
	}

	
}
