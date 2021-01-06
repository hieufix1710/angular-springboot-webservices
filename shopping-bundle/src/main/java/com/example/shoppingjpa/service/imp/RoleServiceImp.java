package com.example.shoppingjpa.service.imp;

import com.example.shoppingjpa.model.Role;
import com.example.shoppingjpa.service.RoleService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RoleServiceImp implements RoleService {
    @Override
    public List<Role> getAll() {
        return null;
    }

    @Override
    public Optional<Role> getById(int id) {
        return Optional.empty();
    }

    @Override
    public Role save(Role role) {
        return null;
    }

    @Override
    public void delete(int[] ids) {

    }
}
