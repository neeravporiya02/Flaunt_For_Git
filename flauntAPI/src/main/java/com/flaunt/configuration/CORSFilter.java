package com.flaunt.configuration;

import java.io.IOException;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Component;

@Component
public class CORSFilter implements Filter {

	public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) throws IOException, ServletException {
		HttpServletResponse response = (HttpServletResponse) res;
		
		//String[] allowDomain = {"http://localhost:8080","http://trade.neml.in", "https://trade.neml.in"};
		String[] allowDomain = {"http://localhost:8080"};
		Set<String> allowedOrigins = new HashSet<String>(Arrays.asList (allowDomain));
		
		HttpServletRequest httpReq = (HttpServletRequest) req;
		
		//String originHeader = httpReq.getHeader("Origin");
		
		String originHeader = httpReq.getHeader("Host");
		String userId = (String)httpReq.getAttribute("Userid");
		//String origin = httpReq.getHeader("Origin");
		
		if(allowedOrigins.contains(originHeader)) {
			response.setHeader("Access-Control-Allow-Methods", "POST, GET");
			//response.setHeader("Access-Control-Max-Age", "3600");
			response.setHeader("Access-Control-Allow-Headers", "X-requested-with, Content-Type");
			response.setHeader("Pragma", "no-cache"); // HTTP 1.0.
			response.setHeader("Expires", "0"); // Proxies.
			response.setHeader("Content-Type", ""); // Content-Type.
			response.setHeader("Access-Control-Allow-Origin", "*");
			chain.doFilter(req, res);
		}else{
			
			
			response.setHeader("Access-Control-Allow-Methods", "POST, GET");
			//response.setHeader("Access-Control-Max-Age", "3600");
			response.setHeader("Access-Control-Allow-Headers", "X-requested-with, Content-Type");
			response.setHeader("Pragma", "no-cache"); // HTTP 1.0.
			response.setHeader("Expires", "0"); // Proxies.
			response.setHeader("Content-Type", ""); // Content-Type.
			response.setHeader("Access-Control-Allow-Origin", "*");
			chain.doFilter(req, res);
			
			//((HttpServletResponse) response)
				//.setStatus(HttpServletResponse.SC_BAD_REQUEST);
				
			//response.sendRedirect(originHeader);
			//response.setHeader("Access-Control-Allow-Origin", "https://trade.neml.in");
			//response.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
		}
		
		System.out.println("Host :"+httpReq.getHeader("Host"));
		//System.out.println("Origin :"+httpReq.getHeader("Origin"));
		
		
		
	}

	public void init(FilterConfig filterConfig) {}

	public void destroy() {}

}