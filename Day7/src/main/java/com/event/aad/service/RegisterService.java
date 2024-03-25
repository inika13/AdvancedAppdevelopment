package com.event.aad.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.event.aad.entity.RegisterEntity;
import com.event.aad.repository.RegisterRepo;

@Service
public  class RegisterService implements RegisterInt 
{
   
    @Autowired
    private RegisterRepo signuprepository;
	@Override
	public List<RegisterEntity> getDetails() {
		
		return signuprepository.findAll();
	}

    @Override
    public void saveSignup(RegisterEntity signupentity) 
    {
    	signuprepository.save(signupentity);
	
    }

   @Override
   public void updateSignup(RegisterEntity signupentity) 
   {
	   signuprepository.save(signupentity);
	
   }

   @Override
   public void deleteSignup(String username) 
   {
	   signuprepository.deleteByUsername(username);
   }

@Override
public List<RegisterEntity> getAll(String username, String email) {
	
	return signuprepository.getAll(username, email);
}
}

