package com.example.shoppingjpa.service.imp;

import com.example.shoppingjpa.model.Staff;
import com.example.shoppingjpa.service.StaffService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StaffServiceImp implements StaffService {
    @Override
    public List<Staff> getAll() {
        return null;
    }

    @Override
    public Optional<Staff> getById(int id) {
        return Optional.empty();
    }

    @Override
    public Staff save(Staff staff) {
        return null;
    }

    @Override
    public void delete(int[] ids) {

    }
}
