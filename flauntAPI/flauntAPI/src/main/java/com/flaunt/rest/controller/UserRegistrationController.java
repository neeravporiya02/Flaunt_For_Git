package com.flaunt.rest.controller;


import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.flaunt.bean.UserRegistration;
import com.flaunt.service.UserRegistrationService;
import com.flaunt.util.common.Util;

@CrossOrigin(origins = {"http://localhost:8080"})
@RestController
public class UserRegistrationController {
	
	private static Logger flauntAPILog = LoggerFactory.getLogger("flauntAPI");
	
	@Autowired
	private UserRegistrationService userRegistrationService;
	
	@PostMapping(path = "/registerUser")
	public ResponseEntity<List<Object>> registerUser(@RequestBody UserRegistration userRegistration) {
		flauntAPILog.info("Inside UserRegistrationController -> registerUser");
		List<Object> result = new ArrayList<Object>();
		
		result = userRegistrationService.registerUser(userRegistration);

		flauntAPILog.info("Inside UserRegistrationController -> registerUser");		
		return new ResponseEntity<List<Object>>(result, HttpStatus.OK);
	}
	
	@RequestMapping(path = "/getCustomerDetailsById/{custId}", method = RequestMethod.GET)
	public ResponseEntity<List<Object>> getCustomerDetailsById(@PathVariable(value = "custId") int custId) {
		flauntAPILog.info("Inside UserRegistrationController -> getCustomerDetailsById");
		List<Object> result = new ArrayList<Object>();
		
		result = userRegistrationService.getCustomerDetailsById(custId);

		flauntAPILog.info("Inside UserRegistrationController -> getCustomerDetailsById");		
		return new ResponseEntity<List<Object>>(result, HttpStatus.OK);
	}
	
	@RequestMapping(path = "/deleteUserById/{custId}", method = RequestMethod.GET)
	public ResponseEntity<List<Object>> deleteUserById(@PathVariable(value = "custId") int custId) {
		flauntAPILog.info("Inside UserRegistrationController -> deleteUserById");
		List<Object> result = new ArrayList<Object>();
		
		result = userRegistrationService.deleteUserById(custId);

		flauntAPILog.info("Inside UserRegistrationController -> deleteUserById");		
		return new ResponseEntity<List<Object>>(result, HttpStatus.OK);
	}	
	
//	@RequestMapping(value = "/registerUser/{id}/{name}/{address}", method = RequestMethod.GET)
//	public UserRegistration registerUser(@PathVariable(value = "id") String id, @PathVariable(value = "name") String name,
//			@PathVariable(value = "address") String address) {
//
//		logger.info("Inside UserRegistrationController -> registerUser");
//
//		System.out.println(id + " " + name + " " + address);
//
//		UserRegistration emp = new UserRegistration(id, name, address);
//
//		logger.info("Exiting UserRegistrationController -> registerUser");
//
//		return emp;
//	}
	

}
