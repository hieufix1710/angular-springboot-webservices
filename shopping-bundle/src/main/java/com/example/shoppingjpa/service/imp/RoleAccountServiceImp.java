package com.example.shoppingjpa.service.imp;

import com.example.shoppingjpa.model.RoleAccount;
import com.example.shoppingjpa.repository.RoleAccountRepository;
import com.example.shoppingjpa.service.RoleAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RoleAccountServiceImp implements RoleAccountService {
@Autowired
private RoleAccountRepository roleAccountRepository;
    @Override
    public List<RoleAccount> getAll() {
        List<RoleAccount> list = null;
        try {
            list = roleAccountRepository.findAll();
        }catch (Exception e){
            System.out.println(e.getMessage());
        }
        return list;
    }

    @Override
    public Optional<RoleAccount> getById(int id) {
        return Optional.empty();
    }

    @Override
    public RoleAccount save(RoleAccount roleAccount) {
        return null;
    }

    @Override
    public void delete(int[] ids) {

    }
}
