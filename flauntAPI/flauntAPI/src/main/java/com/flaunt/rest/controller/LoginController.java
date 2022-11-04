package com.flaunt.rest.controller;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.flaunt.bean.Login;
import com.flaunt.service.LoginService;

@CrossOrigin(origins = {"http://localhost:8080"})
@RestController
public class LoginController {

	private static Logger flauntAPILog = LoggerFactory.getLogger("flauntAPI");
	
	@Autowired
	private LoginService loginService;
	
	@PostMapping(path = "/login")
	public ResponseEntity<List<Object>> login(@RequestBody Login login) {
		flauntAPILog.info("Inside LoginController -> login");
		List<Object> result = new ArrayList<Object>();
		
		result = loginService.login(login);


		flauntAPILog.info("Inside LoginController -> login");
		return new ResponseEntity<List<Object>>(result, HttpStatus.OK);
	}
}
