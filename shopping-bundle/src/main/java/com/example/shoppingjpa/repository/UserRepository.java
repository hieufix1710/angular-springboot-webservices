package com.example.shoppingjpa.repository;

import com.example.shoppingjpa.model.Account;
import com.example.shoppingjpa.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
         User findByAccount(Account account);
}
