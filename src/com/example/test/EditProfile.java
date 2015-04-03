package com.example.test;

import java.io.IOException;
import java.io.PrintWriter;
import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.appengine.labs.repackaged.org.json.JSONObject;

@SuppressWarnings("serial")
public class EditProfile extends HttpServlet {
	
	protected void doPost(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		
		if(req.getParameter("editprofile")!=null){
			
			String number = req.getParameter("number");
			String name = req.getParameter("name");
			String address = req.getParameter("address");
			String email = req.getParameter("email");		
		    	
			try{
				CustomerAPI capi = new CustomerAPI();
				Customer customer = capi.getCustomer(number);
				customer.setName(name);
				customer.setAddress(address);
				customer.setEmail(email);
		    	Customer c = capi.updateCustomer(customer);
		    	if(c!=null){
		    		JSONObject json = new JSONObject();
		           	json.put("name", c.getName());
		        	json.put("address", c.getAddress());
		        	json.put("email", c.getEmail());
		            PrintWriter out= resp.getWriter();
		            out.print(json);
		            resp.addHeader("AUTH", "1");
		        }else{
		        	PrintWriter out= resp.getWriter();
		            out.println("No such user exists");
		            resp.addHeader("AUTH", "0");
		        	
		        }
		    }catch(Exception e){
				System.out.println(e);
			}
		
		}
		else if(req.getParameter("editpassword")!=null){
			
			 String password = req.getParameter("password");
			 String number = req.getParameter("number");
			 
			 String hash = null;
				try {
					hash = PasswordHash.createHash(password);
				} catch (NoSuchAlgorithmException e1) {
					e1.printStackTrace();
				} catch (InvalidKeySpecException e1) {
					e1.printStackTrace();
				}
							
				try{				
					CustomerAPI capi = new CustomerAPI();
					Customer customer = capi.getCustomer(number);
					customer.setPassword(hash);
			    	Customer c = capi.updateCustomer(customer);
			    	if(c!=null){
			    		
			            PrintWriter out= resp.getWriter();
			            out.println("Password successfully updated");
			            resp.addHeader("AUTH", "1");
			        }else{
			        	PrintWriter out= resp.getWriter();
			            out.println("No such user exists");
			            resp.addHeader("AUTH", "0");
			        	
			        }
			    }catch(Exception e){
					System.out.println(e);
				}
			
		 }
		
	}
	
}
