package com.example.test;

import java.io.IOException;
import java.io.PrintWriter;
import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.example.test.CustomerAPI;
import com.example.test.Customer;
import com.google.appengine.labs.repackaged.org.json.JSONObject;

@SuppressWarnings("serial")
public class Register extends HttpServlet {
	protected void doPost(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		
		String name = req.getParameter("name");
		String number = req.getParameter("number");
		String address = req.getParameter("address");
		String email = req.getParameter("email");		
	    String password = req.getParameter("password");		
	     
	    
		String hash = null;
		try {
			hash = PasswordHash.createHash(password);
		} catch (NoSuchAlgorithmException e1) {
			e1.printStackTrace();
		} catch (InvalidKeySpecException e1) {
			e1.printStackTrace();
		}
	  
		Customer customer = new Customer();
		customer.setName(name);
		customer.setNumber(number);
		customer.setAddress(address);
		customer.setEmail(email);
		customer.setPassword(hash);
				
		try{
			CustomerAPI capi = new CustomerAPI();
	    	Customer c = capi.insertCustomer(customer);
	    	if(c!=null){
	             
	    		JSONObject json = new JSONObject();
	        	json.put("number", c.getNumber());
	        	json.put("name", c.getName());
	        	json.put("address", c.getAddress());
	        	json.put("email", c.getEmail());
	            PrintWriter out= resp.getWriter();
	              out.print(json);
	              resp.addHeader("AUTH", "1");
	        }else{
	        	PrintWriter out= resp.getWriter();
	            out.println("Username already exists");
	            resp.addHeader("AUTH", "0");
	        	
	        }
		}catch(Exception e){
			throw new ServletException(e);
		}
		
	}
	

}
