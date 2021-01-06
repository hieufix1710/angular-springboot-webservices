package com.example.shoppingjpa.controller;

import com.example.shoppingjpa.model.User;
import com.example.shoppingjpa.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("users")
    public User getUser(@RequestParam String userName) {
             return  userService.getUserByUserName(userName);
    }
}
