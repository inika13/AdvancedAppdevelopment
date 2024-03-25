package com.event.aad.service;

import com.event.aad.entity.FeedbackEntity;

import java.util.List;

public interface FeedbackInt {

    List<FeedbackEntity> getAllFeedbacks();

    FeedbackEntity getFeedbackById(Long id);

    FeedbackEntity createFeedback(FeedbackEntity feedbackEntity);

    FeedbackEntity updateFeedback(Long id, FeedbackEntity updatedFeedback);

    void deleteFeedback(Long id);
}
