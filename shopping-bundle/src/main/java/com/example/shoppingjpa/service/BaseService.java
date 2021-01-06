package com.example.shoppingjpa.service;

import java.util.List;
import java.util.Optional;

public interface BaseService<T> {
    List<T> getAll();
    Optional<T> getById(int id);
    T save(T t);
    void delete(int[] ids);
}
