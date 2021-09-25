package com.lithan.model;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;

@Entity
@EnableAutoConfiguration
public class Store {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int storeId;
	private String storeName;
	private String storeLocation;
	private String storePhoneNumber;
	
	
	public int getStoreId() {
		return storeId;
	}
	public void setStoreId(int storeId) {
		this.storeId = storeId;
	}
	public String getStoreName() {
		return storeName;
	}
	public void setStoreName(String storeName) {
		this.storeName = storeName;
	}
	public String getStoreLocation() {
		return storeLocation;
	}
	public void setStoreLocation(String storeLocation) {
		this.storeLocation = storeLocation;
	}
	public String getStorePhoneNumber() {
		return storePhoneNumber;
	}
	public void setStorePhoneNumber(String storePhoneNumber) {
		this.storePhoneNumber = storePhoneNumber;
	}
	
	public Store(int storeId, String storeName, String storeLocation, String storePhoneNumber) {
		super();
		this.storeId = storeId;
		this.storeName = storeName;
		this.storeLocation = storeLocation;
		this.storePhoneNumber = storePhoneNumber;
	}
	
	public Store()
	{
		
	}
	
	
}
