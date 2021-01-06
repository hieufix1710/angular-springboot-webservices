package com.example.shoppingjpa.service;

import com.example.shoppingjpa.model.User;

public interface UserService extends BaseService<User> {
    User getUserByUserName(String userName);
}
