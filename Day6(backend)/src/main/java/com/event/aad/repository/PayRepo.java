package com.event.aad.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.event.aad.entity.PayEntity;


public interface PayRepo extends JpaRepository<PayEntity, Long> {
    
    @Query(value = "SELECT * FROM payment WHERE username=:username", nativeQuery = true)
    public List<PayEntity> getAllByUsername(String username);
}
