package com.lithan.services;

import java.util.List;

import com.lithan.model.Store;


public interface StoreService {

	public Store addStore(Store store);
	
	public List<Store> getStores();
	
	public java.util.Optional<Store> viewStore(int storeId);
	
	public void  deleteStoreById(int id);
	
	public List<Store> searchForStores(String searchKeyword);
	
	
	
	
}
