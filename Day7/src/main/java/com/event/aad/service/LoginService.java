package com.event.aad.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.event.aad.entity.LoginEntity;
import com.event.aad.repository.LoginRepo;

@Service
public class LoginService implements LoginInt {
    
    @Autowired
	private LoginRepo loginRepository;

	@Override
	public List<LoginEntity> getLogin() {
		return loginRepository.findAll();
	}

	@Override
	public void saveLogin (LoginEntity loginentity) {
		loginRepository.save(loginentity);
	}

	@Override
	public void updateLogin(LoginEntity loginentity) {
		loginRepository.save(loginentity);
	}

	@Override
	public void deleteLogin(String username) {
		loginRepository.deleteById(username);
	}

	@Override
	public List<LoginEntity> getAll(String username) {

		return loginRepository.getAll(username);
	}
}
