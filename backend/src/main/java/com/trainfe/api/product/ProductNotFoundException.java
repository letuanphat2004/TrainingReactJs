package com.trainfe.api.product;

public class ProductNotFoundException extends RuntimeException {

    public ProductNotFoundException(Long id) {
        super("Khong tim thay san pham co id = " + id);
    }
}
