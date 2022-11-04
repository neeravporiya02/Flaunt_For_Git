package com.flaunt.daoImpl;

import java.sql.Connection;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.flaunt.bean.Product;
import com.flaunt.dao.ProductDao;
import com.flaunt.util.common.Util;
import com.flaunt.util.constants.Constants;
import com.flaunt.util.dbConn.DBConnection;
import com.flaunt.util.dbConn.QueryMaster;

@Service
public class ProductDaoImpl implements ProductDao{
	
	private static Logger errorlog = LoggerFactory.getLogger("error");
	private static Logger querylog = LoggerFactory.getLogger("query");
	private static Logger flauntAPILog = LoggerFactory.getLogger("flauntAPI");

	@Override
	public List<Object> getAllProducts() {
		flauntAPILog.info("Inside ProductDaoImpl -> getAllProducts");
		
		List<Object> result = new ArrayList<Object>();
		StringBuffer sbuf = null;
		ResultSet rs = null;
		QueryMaster qm = new QueryMaster();
		Connection con = null;
		
		try {
						
			con = DBConnection.getDBConnection();
			sbuf = new StringBuffer();
			
			sbuf.append("SELECT * FROM PRODUCT");
			
			querylog.info("Query getAllProducts :" + sbuf.toString());
			
			rs = qm.select(sbuf.toString(), null, con);
			
			List<Product> product = new ArrayList<Product>();
			
			if(rs.next()){
				while(rs.next()) {
					Product productObj = new Product();
					
					productObj.setProductId(rs.getInt("product_id"));
					productObj.setSkuId(rs.getInt("sku_id"));
					productObj.setProductName(rs.getString("productName"));
					productObj.setProductCategory(rs.getString("productCategory"));
					productObj.setProductSubCategory(rs.getString("productSubCategory"));
					productObj.setBrand(rs.getString("brand"));
					productObj.setProductImage(rs.getString("productImage"));
					productObj.setImage1(rs.getString("image1"));
					productObj.setImage2(rs.getString("image2"));
					productObj.setImage3(rs.getString("image3"));
					productObj.setImage4(rs.getString("image4"));
					productObj.setImage5(rs.getString("image5"));
					productObj.setNutritionFact(rs.getString("nutritionfact"));
					productObj.setPrice(rs.getDouble("price"));
					productObj.setWeight(rs.getFloat("weight"));
					productObj.setUnits(rs.getString("units"));
					productObj.setExpiryDate(rs.getString("expiryDate"));
					
					product.add(productObj);
				}

				result.add(Constants.InsertStatus.SUCCESS);
				result.add(Constants.InsertStatus.SUCCESS_MESSAGE);
				result.add(product);				
			} else {
				result.add(Constants.InsertStatus.FAILURE);
				result.add(Constants.InsertStatus.FAILURE_MESSAGE);
			}
			
		} catch (Exception e) {
			errorlog.info(e.getMessage());
			e.printStackTrace();
			result.add(Constants.InsertStatus.DBERROR);
			result.add(Constants.InsertStatus.FAILURE_MESSAGE);
		} finally {
			Util.closeRsPstmtNdConn(null, null, con);
			qm.closeStatement();
			qm = null;
			sbuf = null;
		}
		
		flauntAPILog.info("Inside ProductDaoImpl -> getAllProducts");
		return result;
	}

	@Override
	public List<Object> getProductById(int productId) {
		flauntAPILog.info("Inside ProductDaoImpl -> getProductById");
		List<Object> result = new ArrayList<Object>();
		
		StringBuffer sbuf = null;
		ResultSet rs = null;
		QueryMaster qm = new QueryMaster();
		List<Object> paramList = new ArrayList<Object>();
		Connection con = null;
		
		try {
			if(!Util.isNeitherNullNorEmpty(productId)) {
				result.add(Constants.Response.ERROR);
				result.add("ProductId not provided!");
				return result;
			}
			
			con = DBConnection.getDBConnection();
			sbuf = new StringBuffer();
			
			sbuf.append("SELECT * FROM PRODUCT "
					+ " WHERE product_id=?");
			
			querylog.info("Query ProductDaoImpl :" + sbuf.toString());
			paramList.add(productId);
			
			rs = qm.select(sbuf.toString(), paramList, con);
			
			if(rs.next()){
				Product productObj = new Product();
				productObj.setProductId(rs.getInt("product_id"));
				productObj.setSkuId(rs.getInt("sku_id"));
				productObj.setProductName(rs.getString("productName"));
				productObj.setProductCategory(rs.getString("productCategory"));
				productObj.setProductSubCategory(rs.getString("productSubCategory"));
				productObj.setBrand(rs.getString("brand"));
				productObj.setProductImage(rs.getString("productImage"));
				productObj.setImage1(rs.getString("image1"));
				productObj.setImage2(rs.getString("image2"));
				productObj.setImage3(rs.getString("image3"));
				productObj.setImage4(rs.getString("image4"));
				productObj.setImage5(rs.getString("image5"));
				productObj.setNutritionFact(rs.getString("nutritionfact"));
				productObj.setPrice(rs.getDouble("price"));
				productObj.setWeight(rs.getFloat("weight"));
				productObj.setUnits(rs.getString("units"));
				productObj.setExpiryDate(rs.getString("expiryDate"));
				
				result.add(Constants.InsertStatus.SUCCESS);
				result.add(Constants.InsertStatus.SUCCESS_MESSAGE);
				result.add(productObj);
			} else {
				result.add(Constants.InsertStatus.FAILURE);
				result.add(Constants.InsertStatus.FAILURE_MESSAGE);
			}
			
		} catch (Exception e) {
			errorlog.info(e.getMessage());
			e.printStackTrace();
			result.add(Constants.InsertStatus.DBERROR);
			result.add(Constants.InsertStatus.FAILURE_MESSAGE);
		} finally {
			Util.closeRsPstmtNdConn(null, null, con);
			qm.closeStatement();
			qm = null;
			sbuf = null;
			paramList = null;
		}
		
		flauntAPILog.info("Inside ProductDaoImpl -> getProductById");
		return result;
	}

}
