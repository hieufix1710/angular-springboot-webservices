package com.example.shoppingjpa.service.imp;

import com.example.shoppingjpa.model.ProductBought;
import com.example.shoppingjpa.service.ProductBoughtService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductBoughtServiceImpl implements ProductBoughtService {
    @Override
    public List<ProductBought> getAll() {
        return null;
    }

    @Override
    public Optional<ProductBought> getById(int id) {
        return Optional.empty();
    }

    @Override
    public ProductBought save(ProductBought productBought) {
        return null;
    }

    @Override
    public void delete(int[] ids) {

    }
}
