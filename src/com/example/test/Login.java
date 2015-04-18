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
public class Login extends HttpServlet {
	protected void doPost(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {		
			
		 	String number = req.getParameter("number");
		    String password = req.getParameter("password");
		    
		    CustomerAPI capi = new CustomerAPI();
			Customer c = capi.getCustomer(number);		    
		    boolean res = false;
		    
			try {
					if(c!=null){
						String correctHash = c.getPassword();
						res = PasswordHash.validatePassword(password, correctHash);
					}
					
			} catch (NoSuchAlgorithmException e1) {
				e1.printStackTrace();
			} catch (InvalidKeySpecException e1) {
				e1.printStackTrace();
			}
		    try{
		    	
		    	if(res){
		              
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
		            out.println("Invalid Username or Password");
		            resp.addHeader("AUTH", "0");
                }
		    }catch(Exception e){
		        System.out.println(e);
		    }
		
	}
	
}
