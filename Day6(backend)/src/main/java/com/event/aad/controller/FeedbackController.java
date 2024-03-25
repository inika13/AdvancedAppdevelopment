package com.event.aad.controller;

import com.event.aad.entity.FeedbackEntity;
import com.event.aad.service.FeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class FeedbackController {

    private final FeedbackService feedbackService;

    @Autowired
    public FeedbackController(FeedbackService feedbackService) {
        this.feedbackService = feedbackService;
    }

    @GetMapping("/list")
    public ResponseEntity<List<FeedbackEntity>> getAllFeedbacks() {
        List<FeedbackEntity> feedbackList = feedbackService.getAllFeedbacks();
        return new ResponseEntity<>(feedbackList, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<FeedbackEntity> getFeedbackById(@PathVariable Long id) {
        FeedbackEntity feedbackEntity = feedbackService.getFeedbackById(id);
        return new ResponseEntity<>(feedbackEntity, HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<FeedbackEntity> createFeedback(@RequestBody FeedbackEntity feedbackEntity) {
        FeedbackEntity createdFeedback = feedbackService.createFeedback(feedbackEntity);
        return new ResponseEntity<>(createdFeedback, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<FeedbackEntity> updateFeedback(@PathVariable Long id, @RequestBody FeedbackEntity feedbackEntity) {
        FeedbackEntity updatedFeedback = feedbackService.updateFeedback(id, feedbackEntity);
        return new ResponseEntity<>(updatedFeedback, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFeedback(@PathVariable Long id) {
        feedbackService.deleteFeedback(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
