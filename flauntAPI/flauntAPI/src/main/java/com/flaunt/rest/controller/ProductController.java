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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.flaunt.service.ProductService;

@CrossOrigin(origins = {"http://localhost:8080"})
@RestController
public class ProductController {

	private static Logger flauntAPILog = LoggerFactory.getLogger("flauntAPI");
	
	@Autowired
	private ProductService productService;
	
	@RequestMapping(path = "/getAllProducts")
	public ResponseEntity<List<Object>> getAllProducts() {
		flauntAPILog.info("Inside ProductController -> getAllProducts");
		List<Object> result = new ArrayList<Object>();
		
		result = productService.getAllProducts();


		flauntAPILog.info("Inside ProductController -> getAllProducts");
		return new ResponseEntity<List<Object>>(result, HttpStatus.OK);
	}
	
	@RequestMapping(path = "/getProductById/{custId}", method = RequestMethod.GET)
	public ResponseEntity<List<Object>> getProductById(@PathVariable(value = "productId") int productId) {
		flauntAPILog.info("Inside ProductController -> getProductById");
		List<Object> result = new ArrayList<Object>();
		
		result = productService.getProductById(productId);


		flauntAPILog.info("Inside ProductController -> getProductById");
		return new ResponseEntity<List<Object>>(result, HttpStatus.OK);
	}
}
