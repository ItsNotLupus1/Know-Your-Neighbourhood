package com.lithan.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.lithan.model.Store;
import com.lithan.services.StoreService;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/KynStores")
public class StoreController {

	@Autowired
	private  StoreService storeService;
	
	
	@PostMapping("/api/stores")
	public Store postStores(@RequestBody Store store)
	{
		Store stores = storeService.addStore(store);
		return stores;
		
	}
	
	@RequestMapping(value = "/api/stores/{storeId}", 
			  produces = "application/json", 
			  method=RequestMethod.PUT)
			public void updateStores(@RequestBody Store store,@PathVariable int storeId) {
				Optional<Store> stores=storeService.viewStore(storeId);
				
					Store storess = stores.get();
					storess.setStoreName(store.getStoreName());
					storess.setStoreLocation(store.getStoreLocation());
					storess.setStorePhoneNumber(store.getStorePhoneNumber());
					storeService.addStore(storess);
					
				
			}
	
	@DeleteMapping(value = "/api/stores/{id}")
	public void deleteStore(@PathVariable int id)
	{
		
		storeService.deleteStoreById(id);
	}
	
	@GetMapping("/api/stores")
	public List<Store> getStores()
	{
		List<Store> stores = storeService.getStores();
		return stores;
	}
	
	@GetMapping("/api/view_stores/{storeId}")
	public Optional<Store> getStore(@PathVariable int storeId)
	{
		 
		return  storeService.viewStore(storeId);
	}
	
	
	  @GetMapping("/api/searchstores/{searchKeyword}") 
	 public List<Store> searchForStores(@PathVariable("searchKeyword") String searchKeyword)
	  {
		  List<Store> stores = storeService.searchForStores(searchKeyword); 
		  return stores; 
		  
	  }
	
	
	
}
