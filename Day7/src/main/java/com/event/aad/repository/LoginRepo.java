package com.event.aad.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.event.aad.entity.LoginEntity;

public interface LoginRepo extends JpaRepository<LoginEntity, String> {
	@Query(value = "SELECT * FROM login WHERE username=:username", nativeQuery = true)
	public List<LoginEntity> getAll(String username);
}
