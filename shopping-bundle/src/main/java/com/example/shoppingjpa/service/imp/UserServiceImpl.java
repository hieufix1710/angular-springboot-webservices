package com.example.shoppingjpa.service.imp;

import com.example.shoppingjpa.model.Account;
import com.example.shoppingjpa.model.User;
import com.example.shoppingjpa.repository.AccountRepository;
import com.example.shoppingjpa.repository.UserRepository;
import com.example.shoppingjpa.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AccountRepository accountRepository;
    @Override
    public List<User> getAll() {
        return null;
    }

    @Override
    public Optional<User> getById(int id) {
        return Optional.empty();
    }

    @Override
    public User save(User user) {
        return null;
    }

    @Override
    public void delete(int[] ids) {

    }

    @Override
    public User getUserByUserName(String userName) {
        Account account = accountRepository.findByUsername(userName);
        User user = new User();
        try {
            user = userRepository.findByAccount(account);
        }catch (Exception e){
            System.out.println(e.getMessage());
        }
        return user;
    }
}
