package com.flaunt.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.flaunt.bean.Product;
import com.flaunt.dao.ProductDao;
import com.flaunt.service.ProductService;

@Service
public class ProductServiceImpl implements ProductService{

	@Autowired
	private ProductDao productDao;
	
	@Override
	public List<Object> getAllProducts() {
		return productDao.getAllProducts();
	}

	@Override
	public List<Object> getProductById(int productId) {
		return productDao.getProductById(productId);
	}

}
