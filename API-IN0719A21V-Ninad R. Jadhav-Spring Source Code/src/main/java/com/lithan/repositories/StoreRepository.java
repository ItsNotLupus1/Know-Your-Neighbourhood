package com.lithan.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.lithan.model.Store;

@Repository
public interface StoreRepository extends JpaRepository<Store, Integer>{

	
	  @Query(value =
	  "SELECT c FROM Store c WHERE c.storeName LIKE '%' || :searchKeyword || '%'" +
	  " OR c.storeLocation LIKE '%' || :searchKeyword || '%'" +
	  " OR c.storePhoneNumber LIKE '%' || :searchKeyword || '%'") 
	  
	  public List<Store> searchForStores(@Param("searchKeyword") String searchKeyword);
	 
}
