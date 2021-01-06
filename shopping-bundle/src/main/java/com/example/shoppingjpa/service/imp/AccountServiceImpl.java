package com.example.shoppingjpa.service.imp;

import com.example.shoppingjpa.model.Account;

import com.example.shoppingjpa.repository.AccountRepository;
import com.example.shoppingjpa.repository.RoleAccountRepository;
import com.example.shoppingjpa.repository.RoleRepository;
import com.example.shoppingjpa.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class AccountServiceImpl implements AccountService {
    @Autowired
    private AccountRepository accountRepository;
    @Autowired
    private RoleAccountRepository roleAccountRepository;
    @Autowired
    private RoleRepository roleRepository;

    @Override
    public List<Account> getAll() {
        return accountRepository.findAll();
    }

    @Override
    public Optional<Account> getById(int id) {
        return Optional.empty();
    }

    @Override
    public Account save(Account account) {
        return null;
    }

    @Override
    public void delete(int[] ids) {

    }

}
