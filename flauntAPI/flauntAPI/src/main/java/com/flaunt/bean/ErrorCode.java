package com.flaunt.bean;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class ErrorCode {
	
	private String errorCode;
	private String errorDescription;
	
	public ErrorCode() {
		
	}
	
	public ErrorCode(String errorCode, String errorDescription) {
		super();
		this.errorCode = errorCode;
		this.errorDescription = errorDescription;
	}
	
	public String getErrorCode() {
		return errorCode;
	}
	public void setErrorCode(String errorCode) {
		this.errorCode = errorCode;
	}
	public String getErrorDescription() {
		return errorDescription;
	}
	public void setErrorDescription(String errorDescription) {
		this.errorDescription = errorDescription;
	}
	
	

}
