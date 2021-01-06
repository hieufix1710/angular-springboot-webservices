package com.example.shoppingjpa.service.imp;

import com.example.shoppingjpa.model.TypeProduct;
import com.example.shoppingjpa.repository.TypeProductRepository;
import com.example.shoppingjpa.service.TypeProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class TypeProductServiceImpl implements TypeProductService {
    @Autowired
    private TypeProductRepository typeProductRepository;
    @Override
    public List<TypeProduct> getAll() {
        List<TypeProduct> list = new ArrayList<>();
        try {
            list = typeProductRepository.findAll();
        }catch (Exception e) {
            System.out.println(e.getMessage());
        }
        return list;
    }

    @Override
    public Optional<TypeProduct> getById(int id) {
        return Optional.empty();
    }

    @Override
    public TypeProduct save(TypeProduct typeProduct) {
        return null;
    }

    @Override
    public void delete(int[] ids) {

    }
}
