package com.flaunt.exception.controller;

import java.io.FileNotFoundException;
import java.sql.SQLException;

import javax.servlet.http.HttpServletRequest;

import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.flaunt.bean.ErrorCode;

@RestControllerAdvice
public class ExceptionController {

	@ExceptionHandler(NullPointerException.class)
	public ErrorCode handleNullPointerExceptionError(HttpServletRequest request,Exception exception) {
		
		ErrorCode errorCode = new ErrorCode("NullPointerException", exception.getMessage());
		
		return errorCode;
	}
	
	@ExceptionHandler(ArithmeticException.class)
	public ErrorCode handleArithmeticExceptionError(HttpServletRequest request,Exception exception) {
		
		ErrorCode errorCode = new ErrorCode("ArithmeticException", exception.getMessage());
		
		return errorCode;
	}
	
	@ExceptionHandler(ArrayIndexOutOfBoundsException.class)
	public ErrorCode handleArrayIndexOutOfBoundsExceptionError(HttpServletRequest request,Exception exception) {
		
		ErrorCode errorCode = new ErrorCode("ArrayIndexOutOfBoundsException", exception.getMessage());
		
		return errorCode;
	}
	
	@ExceptionHandler(FileNotFoundException.class)
	public ErrorCode handleFileNotFoundExceptionError(HttpServletRequest request,Exception exception) {
		
		ErrorCode errorCode = new ErrorCode("FileNotFoundException", exception.getMessage());
		return errorCode;
	}
	
	
	@ExceptionHandler(SQLException.class)
	public ErrorCode handleSQLExceptionError(HttpServletRequest request,Exception exception) {
		
		ErrorCode errorCode = new ErrorCode("SQLException", exception.getMessage());
		
		return errorCode;
	}
}
