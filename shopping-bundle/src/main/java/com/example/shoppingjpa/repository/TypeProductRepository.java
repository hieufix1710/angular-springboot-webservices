package com.example.shoppingjpa.repository;

import com.example.shoppingjpa.model.TypeProduct;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TypeProductRepository extends JpaRepository<TypeProduct, Long> {
}
