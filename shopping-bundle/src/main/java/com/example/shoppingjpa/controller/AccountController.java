package com.example.shoppingjpa.controller;

import com.example.shoppingjpa.config.TokenAuthenticator;
import com.example.shoppingjpa.model.Account;
import com.example.shoppingjpa.model.JwtDTO;
import com.example.shoppingjpa.model.RoleAccount;
import com.example.shoppingjpa.modelDTO.AccountDTO;
import com.example.shoppingjpa.service.AccountService;
import com.example.shoppingjpa.service.RoleAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.List;
@CrossOrigin(origins = "http://localhost:4200",allowedHeaders = "*")
@RestController
public class AccountController {
    @Autowired
    private AccountService accountService;
    @Autowired
    private RoleAccountService roleAccountService;
    @GetMapping("/accounts")
    public List<Account> getAll(){
        return this.accountService.getAll();
    }

    @PostMapping("/login")
    public JwtDTO getJwt(@RequestBody AccountDTO accountDTO, HttpServletResponse response){
        try {
            Account account = accountService.getAll().stream()
                    .filter(e -> e.getUsername().equals(accountDTO.getUsername())).findFirst().get();
            System.out.println(account.toString());
            if(new BCryptPasswordEncoder().matches( accountDTO.getPassword(), account.getPassword())
                    && account!=null) {
                RoleAccount rc =  roleAccountService.getAll().stream().
                        filter(e-> e.getAccount().getId()== account.getId()).findFirst().get();
                String roleName= rc.getRole().getName();
                String token = TokenAuthenticator.addAuthentication( accountDTO.getUsername(),roleName);
                return new JwtDTO(token,account.getUsername(),roleName);
            }
        }catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }
}
