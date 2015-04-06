package com.example.test;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.api.server.spi.response.CollectionResponse;
import com.google.appengine.labs.repackaged.org.json.JSONArray;
import com.google.appengine.labs.repackaged.org.json.JSONObject;
import com.google.gson.Gson;
import com.google.gson.JsonArray;



public class OrderHandler extends HttpServlet {
	
	protected void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		
		String number = req.getParameter("user");
		String cursorString = null;
		
		try{
			OrderAPI oapi = new OrderAPI();
			CollectionResponse<Order> orders = oapi.getPlacedOrders(number,cursorString);
			
			JSONObject json = new JSONObject();
			Gson gson = new Gson();
			String str = gson.toJson(orders.getItems());
			json.put("nextPageToken",orders.getNextPageToken());
			json.put("orderlist", str);
			PrintWriter out= resp.getWriter();
	        out.print(json);
	        resp.addHeader("AUTH", "1");
			
			
		}catch(Exception e){
			
		}
	}
	//function to handle placing of order
	protected void doPost(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		
		String customer_id = req.getParameter("user");
		String customer_name = req.getParameter("username");
		String list = req.getParameter("list");
		String deliveryno = req.getParameter("deliveryno");
		String deliveryaddress = req.getParameter("deliveryaddress");
		int state = 0;
		Long timestamp = System.currentTimeMillis();
		
		Order order = new Order();
		order.setCustomer_id(customer_id);
		order.setCustomer_name(customer_name);
		order.setList(list);
		order.setDeliveryno(deliveryno);
		order.setDeliveryaddress(deliveryaddress);
		order.setState(state);
		order.setTimestamp(timestamp);
		
		try{
			OrderAPI oapi = new OrderAPI();
			Order o = oapi.insertOrder(order);
			if(o!=null){
				
				JSONObject json = new JSONObject();
	        	json.put("orderid", o.getId());
	        	json.put("number", o.getCustomer_id());
	        	json.put("name", o.getCustomer_name());
	        	json.put("list", o.getList());
	        	json.put("deliveryno", o.getDeliveryno());
	        	json.put("deliveryaddress", o.getDeliveryaddress());
	        	json.put("state", o.getState());
	        	json.put("timestamp", o.getTimestamp());
	        	json.put("message", "Order Successfully Placed");
	            PrintWriter out= resp.getWriter();
	            out.print(json);
	            resp.addHeader("AUTH", "1");
	        }else{
	        	PrintWriter out= resp.getWriter();
	            out.println("There was some error.Please try again");
	            resp.addHeader("AUTH", "0");
			}
			
		}catch(Exception e){
			
		}
		
	}
	//function to handle cancellation of order
	protected void doDelete(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		
		String orderx = req.getParameter("orderid");
		Long order_id = Long.parseLong(orderx);
		try{
			OrderAPI oapi = new OrderAPI();
			Order order = oapi.getOrder(order_id);
			if(order.getState()==0){
				oapi.removeOrder(order_id);
			}else{
				 PrintWriter out= resp.getWriter();
		         out.println("The order could not be deleted as it has been acknowledged by shopkeeper");
		         resp.addHeader("AUTH", "0");
			}
				
		}catch(Exception e){
			
		}
	}
		

}
