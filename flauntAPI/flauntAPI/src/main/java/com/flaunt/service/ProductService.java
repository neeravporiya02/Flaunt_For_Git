package com.flaunt.service;

import java.util.List;

import com.flaunt.bean.Product;

public interface ProductService {
	
	List<Object> getAllProducts();

	List<Object> getProductById(int productId);
}
