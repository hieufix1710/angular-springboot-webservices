package com.example.shoppingjpa.controller;

import com.example.shoppingjpa.model.TypeProduct;
import com.example.shoppingjpa.service.TypeProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TypeProductController {

    @Autowired
    private TypeProductService typeProductService;

    @GetMapping("typeProducts")
    public List<TypeProduct> getAll(){
        return typeProductService.getAll();
    }
}
