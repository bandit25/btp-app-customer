package com.example.test;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@SuppressWarnings("serial")
public class ForgotPassword extends HttpServlet {
	protected void doPost(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		
		try{
			
				String userId = req.getParameter("user");
				CustomerAPI capi = new CustomerAPI();
				Customer c = capi.getCustomer(userId);
				String email = c.getEmail();
				
				TokenAPI tapi = new TokenAPI();
				Token tokenobj = tapi.insertToken(userId);
				String token = tokenobj.getUUID();
				tapi.sendEmail(email, token);
				PrintWriter out= resp.getWriter();
				out.println("Follow the instructions in the sent Email to reset your password.");
						
		}catch(Exception e){
			throw new ServletException(e);
		}	
	}

}
