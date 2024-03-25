package com.event.aad.service;

import java.util.List;

import com.event.aad.entity.RegisterEntity;

public interface RegisterInt
{
   public List<RegisterEntity>getDetails();
   public List<RegisterEntity> getAll(String username,String email);
   public void saveSignup(RegisterEntity signupentity);
   public void updateSignup(RegisterEntity signupentity);
   public void deleteSignup(String username);
}