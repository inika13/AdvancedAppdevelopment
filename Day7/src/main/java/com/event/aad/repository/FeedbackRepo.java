package com.event.aad.repository;

import com.event.aad.entity.FeedbackEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FeedbackRepo extends JpaRepository<FeedbackEntity, Long> {
    
}
