package com.flaunt.dao;

import java.util.List;

import com.flaunt.bean.Product;

public interface ProductDao {

	List<Object> getAllProducts();

	List<Object> getProductById(int productId);

}
