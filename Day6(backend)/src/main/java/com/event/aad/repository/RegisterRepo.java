package com.event.aad.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.event.aad.entity.RegisterEntity;

@Repository
public interface RegisterRepo extends JpaRepository<RegisterEntity, String> 
{
	@Query(value="SELECT * FROM signup WHERE username=:username and email=:email",nativeQuery=true)
    public List<RegisterEntity> getAll(String username,String email);

	public void deleteByUsername(String username);
}
