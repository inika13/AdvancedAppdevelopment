package com.event.aad.repository;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;


import com.event.aad.entity.UserRegister;




public interface UserRegisterRepository extends JpaRepository<UserRegister,Long>{
	Optional<UserRegister>findByUsername(String username);
}
