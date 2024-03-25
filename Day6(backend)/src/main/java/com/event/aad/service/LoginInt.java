package com.event.aad.service;

import java.util.List;

import com.event.aad.entity.LoginEntity;

public interface LoginInt {
    
    public List<LoginEntity> getLogin();

	public List<LoginEntity> getAll(String username);

	public void saveLogin (LoginEntity loginentity);

	public void updateLogin (LoginEntity loginentity);

	public void deleteLogin (String username);
}
