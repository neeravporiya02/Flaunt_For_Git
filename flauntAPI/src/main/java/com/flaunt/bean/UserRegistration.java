package com.flaunt.bean;

public class UserRegistration {
	
	private int custId;
	private String firstName;
	private String lastName;
	private String email;
	private String password;
	private String confirmPassword;
	private String address;
	private String house;
	private String city;
	private String state;
	private String zipCode;
	private String profilePic;
	
	public UserRegistration(){
		
	}

	public UserRegistration(int custId, String firstName, String lastName, String email, String password, String confirmPassword, String address, String house, String city, String state, String zipCode, String profilePic){
		this.custId=custId;
		this.firstName=firstName;
		this.lastName=lastName;
		this.email=email;
		this.password=password;
		this.confirmPassword=confirmPassword;
		this.address=address;
		this.house=house;
		this.city=city;
		this.state=state;
		this.zipCode=zipCode;
		this.profilePic=profilePic;
	}
	
	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getHouse() {
		return house;
	}

	public void setHouse(String house) {
		this.house = house;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getZipCode() {
		return zipCode;
	}

	public void setZipCode(String zipCode) {
		this.zipCode = zipCode;
	}

	public String getProfilePic() {
		return profilePic;
	}

	public void setProfilePic(String profilePic) {
		this.profilePic = profilePic;
	}

	public int getCustId() {
		return custId;
	}

	public void setCustId(int custId) {
		this.custId = custId;
	}

	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getConfirmPassword() {
		return confirmPassword;
	}
	public void setConfirmPassword(String confirmPassword) {
		this.confirmPassword = confirmPassword;
	}
	
}