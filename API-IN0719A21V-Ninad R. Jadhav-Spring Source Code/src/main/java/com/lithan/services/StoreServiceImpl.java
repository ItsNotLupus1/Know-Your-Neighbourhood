package com.lithan.services;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lithan.model.Store;
import com.lithan.repositories.StoreRepository;

@Service
@Transactional
public class StoreServiceImpl implements StoreService{

	@Autowired
	StoreRepository storeRepo;
	
	@Override
	public Store addStore(Store store) {
		
		return storeRepo.save(store);
	}

	@Override
	public List<Store> getStores() {
		List <Store> stores = storeRepo.findAll();
		return stores;
	}

	
	  @Override 
	  public List<Store> searchForStores(String searchKeyword) 
	  { 
		  List<Store> stores = storeRepo.searchForStores(searchKeyword); 
		  return stores; 
		  
	  }


	@Override
	public void deleteStoreById(int id) {
		storeRepo.deleteById(id);
		
	}

	@Override
	public Optional<Store> viewStore(int storeId) {
		return storeRepo.findById(storeId);
		
	}
	 

}
