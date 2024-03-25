package com.event.aad.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.event.aad.entity.PayEntity;
import com.event.aad.service.PayService;



@RestController
@CrossOrigin("*")
public class PayController {

    @Autowired
    private PayService paymentService;

    @GetMapping("/payments")
    public List<PayEntity> getAllPayments() {
        return paymentService.getAllPayments();
    }

    @GetMapping("/payments/{id}")
    public PayEntity getPaymentById(@RequestParam Long id) {
        return paymentService.getPaymentById(id);
    }

    @PostMapping("/payments")
    public PayEntity createPayment(@RequestBody PayEntity paymentEntity) {
        return paymentService.createPayment(paymentEntity);
    }

    @PutMapping("/payments/{id}")
    public PayEntity updatePayment(@RequestBody PayEntity paymentEntity, @RequestParam Long id) {
        return paymentService.updatePayment(paymentEntity, id);
    }

    @DeleteMapping("/payments/{id}")
    public void deletePayment(@RequestParam Long id) {
        paymentService.deletePayment(id);
    }
}

