package com.lithan.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lithan.model.Users;
import com.lithan.services.UserService;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/KynUsers")
public class UserController {

	@Autowired
	private UserService userService;
	
	@Autowired 
    private BCryptPasswordEncoder bCryptPasswordEncoder;

	@PostMapping("/api/register")
    public Users addUser(@RequestBody Users users) {
		System.out.println(users.getUserPassword());   
		System.out.println(users.getFullName());
		users.setUserPassword(bCryptPasswordEncoder.encode(users.getUserPassword()));
        return userService.addUser(users);
    }
	
	
}
