package com.event.aad.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.event.aad.entity.LoginEntity;
import com.event.aad.service.LoginInt;

@RestController
@CrossOrigin("*")

public class LoginController {
    
    @Autowired
	private LoginInt loginservice;

	@GetMapping("/loginget")
	public List<LoginEntity> getLoginDetails1() {

		return loginservice.getLogin();
	}

	@GetMapping("/loginget1")
	public List<LoginEntity> getAllDetails(@RequestParam String username) {
		return loginservice.getAll(username);
	}

	@PostMapping("/loginpost")
	public void saveDetails(@RequestBody LoginEntity loginentity) {
		loginservice.saveLogin(loginentity);
	}

	@PutMapping("/loginput")
	public void updateDetails(@RequestBody LoginEntity loginentity, @RequestParam String username) {
		loginentity.setUsername(username);
		loginservice.updateLogin(loginentity);
	}

	@DeleteMapping("/logindelete")
	public void deleteDetails(@RequestParam String username) {
		loginservice.deleteLogin(username);
	}

	public List<LoginEntity> findAll() {

		return null;
	}

	public void save(LoginEntity loginentity) {

	}

	public void deleteById(String username) {

	}

	public List<LoginEntity> getAll(String username) {

		return null;
	}
}
