package com.event.aad.service;

import com.event.aad.entity.FeedbackEntity;
import com.event.aad.repository.FeedbackRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FeedbackService {

    private final FeedbackRepo feedbackRepo;

    @Autowired
    public FeedbackService(FeedbackRepo feedbackRepo) {
        this.feedbackRepo = feedbackRepo;
    }

    public List<FeedbackEntity> getAllFeedbacks() {
        return feedbackRepo.findAll();
    }

    public FeedbackEntity getFeedbackById(Long id) {
        Optional<FeedbackEntity> feedbackOptional = feedbackRepo.findById(id);
        return feedbackOptional.orElse(null);
    }

    public FeedbackEntity createFeedback(FeedbackEntity feedbackEntity) {
        return feedbackRepo.save(feedbackEntity);
    }

    public FeedbackEntity updateFeedback(Long id, FeedbackEntity updatedFeedback) {
        Optional<FeedbackEntity> existingFeedbackOptional = feedbackRepo.findById(id);
        if (existingFeedbackOptional.isPresent()) {
            FeedbackEntity existingFeedback = existingFeedbackOptional.get();
            existingFeedback.setName(updatedFeedback.getName());
            existingFeedback.setEmail(updatedFeedback.getEmail());
            existingFeedback.setFeedbackType(updatedFeedback.getFeedbackType());
            existingFeedback.setMessage(updatedFeedback.getMessage());
            return feedbackRepo.save(existingFeedback);
        } else {
            return null; 
        }
    }

    public void deleteFeedback(Long id) {
        feedbackRepo.deleteById(id);
    }
}
