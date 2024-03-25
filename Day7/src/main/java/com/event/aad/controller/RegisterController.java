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

import com.event.aad.entity.RegisterEntity;
import com.event.aad.service.RegisterService;

@CrossOrigin("*")
@RestController
public class RegisterController {
    
    @Autowired
    private RegisterService signupservice;
    @GetMapping("/signupget")
    public List<RegisterEntity>getSign()
    {
    	return signupservice.getDetails();
    }
    
    @GetMapping("/signupget1")
	public List<RegisterEntity> getAllDetails(@RequestParam String username,@RequestParam String email)
	{
		return signupservice.getAll(username, email);
	}
    
    @PostMapping("/signuppost")
    public void saveDetails(@RequestBody RegisterEntity signupentity)
    {
    	signupservice.saveSignup(signupentity);
    }
    
    @PutMapping("/signupput")
    public void updateDetails(@RequestBody RegisterEntity signupentity,@RequestParam String username)
    {
    	signupentity.setUsername(username);
    	signupservice.updateSignup(signupentity);
    }
    
  @DeleteMapping("/signupdelete")
  public void deleteDetails(@RequestParam String username)
  {
	  signupservice.deleteSignup(username);
  }
}
