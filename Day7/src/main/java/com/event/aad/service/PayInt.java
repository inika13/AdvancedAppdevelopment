package com.event.aad.service;


import java.util.List;

import com.event.aad.entity.PayEntity;


public interface PayInt {

    List<PayEntity> getAllPayments();

    PayEntity getPaymentById(Long id);

    PayEntity createPayment(PayEntity paymentEntity);

    PayEntity updatePayment(PayEntity paymentEntity, Long id);

    void deletePayment(Long id);
}

