package com.example.test;

import java.util.ArrayList;
import java.util.List;

import javax.inject.Named;
import javax.jdo.PersistenceManager;
import javax.persistence.EntityNotFoundException;

import com.example.test.Customer;
import com.example.test.PMF;
import com.google.api.server.spi.config.Api;
import com.google.api.server.spi.config.ApiMethod;

@Api(name="customerapi", version ="v1", description = "testapi")
public class CustomerAPI {
	
	public static List<Customer> customers = new ArrayList<Customer>();
	
	@ApiMethod(name ="insertCustomer")
	public Customer insertCustomer(Customer c){
		PersistenceManager mgr = getPersistenceManager();
		try {
			if(c.getNumber()!=null){
				if (existsCustomer(c)) {
					return null;
				}
			}
			mgr.makePersistent(c);
		} finally {
			mgr.close();
		}
		return c;
	}
	
	@ApiMethod(name="getCustomer")
	public Customer getCustomer(@Named("no")String no){
		PersistenceManager mgr = getPersistenceManager();
		Customer c = mgr.getObjectById(Customer.class,no);
		try{
			if(!existsCustomer(c)){
				return null;
			}
		}finally{
			mgr.close();
		}
		return c;
	}
	
	@ApiMethod(name ="updateCustomer")
	public Customer updateCustomer(Customer c){
		PersistenceManager mgr = getPersistenceManager();
		try{
			if(!existsCustomer(c)){
				return null;
			}
			mgr.makePersistent(c);
		}finally{
			mgr.close();
		}
		return c;
	}
	
	@ApiMethod(name = "deleteCustomer")
	public void deleteCustomer(@Named("no") String no){
		PersistenceManager mgr = getPersistenceManager();
		try{
			Customer c = mgr.getObjectById(Customer.class, no); 
			mgr.deletePersistent(c);
		}finally{
			mgr.close();
		}
	}
	
	private static boolean existsCustomer(Customer c){
		PersistenceManager mgr = getPersistenceManager();
		boolean res = true;
		try {
			mgr.getObjectById(Customer.class, c.getNumber());
		} catch (javax.jdo.JDOObjectNotFoundException ex) {
			res = false;
		} finally {
			mgr.close();
		}
		return res;
	}
	
	private static PersistenceManager getPersistenceManager() {
		return PMF.get().getPersistenceManager();
	}
	
	
}
