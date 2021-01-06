package com.example.shoppingjpa.service.imp;

import com.example.shoppingjpa.model.Bill;
import com.example.shoppingjpa.service.BillService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BillServiceImpl implements BillService {
    @Override
    public List<Bill> getAll() {
        return null;
    }

    @Override
    public Optional<Bill> getById(int id) {
        return Optional.empty();
    }

    @Override
    public Bill save(Bill bill) {
        return null;
    }

    @Override
    public void delete(int[] ids) {

    }
}
