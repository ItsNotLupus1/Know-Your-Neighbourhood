package com.lithan.KYN;



import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan("com.lithan")
@EntityScan("com.lithan")
@EnableJpaRepositories("com.lithan")
public class KYNApplication{

	public static void main(String[] args) {
		SpringApplication.run(KYNApplication.class, args);
	}
	
	


}
