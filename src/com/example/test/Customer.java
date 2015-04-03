package com.example.test;

import java.io.Serializable;

import javax.jdo.annotations.IdentityType;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;


@PersistenceCapable(identityType = IdentityType.APPLICATION)
public class Customer implements Serializable {
	
	private static final long serialVersionUID = 1L;
    @Persistent
	String name;  
	@Persistent	
	@PrimaryKey
	String number;
	@Persistent
	String address;
	@Persistent
	String email;	
	@Persistent
	String password;	
		
	public Customer(){
		
	}
	
	public String getName(){
		return name;
	}
	public String getNumber(){
		return number;
	}
	public String getAddress(){
		return address;
	}
	public String getEmail(){
		return email;
	}
	public String getPassword(){
		return password;
	}
		
	public void setName(String Name){
		this.name = Name;
	}
	public void setNumber(String Number){
		this.number = Number;
	}
	public void setAddress(String Address){
		this.address = Address;
	}
	public void setEmail(String Email){
		this.email = Email;
	}
	public void setPassword(String Password){
		this.password = Password;
	}
	
}
