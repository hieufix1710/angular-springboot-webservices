package com.example.shoppingjpa.repository;

import com.example.shoppingjpa.model.ProductBought;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductBoughtRepository extends JpaRepository<ProductBought, Long> {
}
