package com.event.aad.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.event.aad.entity.PayEntity;
import com.event.aad.repository.PayRepo;



@Service
public class PayService {

    @Autowired
    private PayRepo paymentRepository;

    public List<PayEntity> getAllPayments() {
        return paymentRepository.findAll();
    }

    public PayEntity getPaymentById(Long id) {
        return paymentRepository.findById(id).orElse(null);
    }

    public PayEntity createPayment(PayEntity paymentEntity) {
        return paymentRepository.save(paymentEntity);
    }

    public PayEntity updatePayment(PayEntity paymentEntity, Long id) {
        if (paymentRepository.existsById(id)) {
            paymentEntity.setId(id); 
            return paymentRepository.save(paymentEntity);
        }
        return null; 
    }

    public void deletePayment(Long id) {
        paymentRepository.deleteById(id);
    }
}
