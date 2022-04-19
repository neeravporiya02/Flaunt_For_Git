package com.flaunt.rest.controller;


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

import com.flaunt.bean.Registration;
import com.flaunt.service.RegistrationService;

@CrossOrigin(origins = {"http://localhost:8080"})
@RestController
public class RegistrationController {
	
	private static Logger logger = LoggerFactory.getLogger("enam");
	
	@Autowired
	private RegistrationService employeeService;
	
	@RequestMapping(value="/getData/{id}/{name}/{address}",method=RequestMethod.GET)
	public Registration getData(@PathVariable(value = "id") String id,
			@PathVariable(value = "name") String name,
			@PathVariable(value = "address") String address){
		
		logger.info("Inside TestController -> getData");
		
		System.out.println(id+" "+name+" "+address);
		
		Registration emp = new Registration(id, name, address);
		
		logger.info("Exiting TestController -> getData");
		
		return emp;
	}
	
	
	@PostMapping(path = "/SaveTrader")
	public ResponseEntity<Registration> getData(@RequestBody Registration employee){
		  
		/*
		 * String licno = trader.getLicno(); String tradernm = trader.getTradernm();
		 * String uniqkeyhash = trader.getUniqkeyhash(); String statecode =
		 * trader.getStatecode(); String dateTimestamp = trader.getDateTimestamp();
		 */
		 employeeService.getEmployee(employee);
			//System.out.println("Hello!!!!!!!!!!!!!!!!");
			
			Registration emp1 = new Registration("1", "deep", "mumbai");
		
		return new ResponseEntity<Registration>(emp1,HttpStatus.OK);
	}

}
