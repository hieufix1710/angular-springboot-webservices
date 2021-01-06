package com.example.shoppingjpa.repository;

import com.example.shoppingjpa.model.RoleAccount;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleAccountRepository extends JpaRepository<RoleAccount, Long> {
}
