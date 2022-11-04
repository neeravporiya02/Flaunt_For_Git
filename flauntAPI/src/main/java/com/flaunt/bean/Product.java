package com.flaunt.bean;

public class Product {
	private int productId;
	private int skuId;
	private String productName;
	private String productCategory;
	private String productSubCategory;
	private String brand;
	private String productImage;
	private String image1;
	private String image2;
	private String image3;
	private String image4;
	private String image5;
	private String nutritionFact;
	private double price;
	private float weight;
	private String units;
	private String expiryDate;
	private int availableStock;
	
	public Product(){
		
	}
	
	public Product(int productId, int skuId, String productName, String productCategory, String productSubCategory,
			String brand, String productImage, String image1, String image2, String image3, String image4,
			String image5, String nutritionFact, double price, float weight, String units, String expiryDate,
			int availableStock) {
		this.productId = productId;
		this.skuId = skuId;
		this.productName = productName;
		this.productCategory = productCategory;
		this.productSubCategory = productSubCategory;
		this.brand = brand;
		this.productImage = productImage;
		this.image1 = image1;
		this.image2 = image2;
		this.image3 = image3;
		this.image4 = image4;
		this.image5 = image5;
		this.nutritionFact = nutritionFact;
		this.price = price;
		this.weight = weight;
		this.units = units;
		this.expiryDate = expiryDate;
		this.availableStock = availableStock;
	}

	public int getProductId() {
		return productId;
	}

	public void setProductId(int productId) {
		this.productId = productId;
	}

	public int getSkuId() {
		return skuId;
	}

	public void setSkuId(int skuId) {
		this.skuId = skuId;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getProductCategory() {
		return productCategory;
	}

	public void setProductCategory(String productCategory) {
		this.productCategory = productCategory;
	}

	public String getProductSubCategory() {
		return productSubCategory;
	}

	public void setProductSubCategory(String productSubCategory) {
		this.productSubCategory = productSubCategory;
	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	public String getProductImage() {
		return productImage;
	}

	public void setProductImage(String productImage) {
		this.productImage = productImage;
	}

	public String getImage1() {
		return image1;
	}

	public void setImage1(String image1) {
		this.image1 = image1;
	}

	public String getImage2() {
		return image2;
	}

	public void setImage2(String image2) {
		this.image2 = image2;
	}

	public String getImage3() {
		return image3;
	}

	public void setImage3(String image3) {
		this.image3 = image3;
	}

	public String getImage4() {
		return image4;
	}

	public void setImage4(String image4) {
		this.image4 = image4;
	}

	public String getImage5() {
		return image5;
	}

	public void setImage5(String image5) {
		this.image5 = image5;
	}

	public String getNutritionFact() {
		return nutritionFact;
	}

	public void setNutritionFact(String nutritionFact) {
		this.nutritionFact = nutritionFact;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public float getWeight() {
		return weight;
	}

	public void setWeight(float weight) {
		this.weight = weight;
	}

	public String getUnits() {
		return units;
	}

	public void setUnits(String units) {
		this.units = units;
	}

	public String getExpiryDate() {
		return expiryDate;
	}

	public void setExpiryDate(String expiryDate) {
		this.expiryDate = expiryDate;
	}

	public int getAvailableStock() {
		return availableStock;
	}

	public void setAvailableStock(int availableStock) {
		this.availableStock = availableStock;
	}
	
	
}
