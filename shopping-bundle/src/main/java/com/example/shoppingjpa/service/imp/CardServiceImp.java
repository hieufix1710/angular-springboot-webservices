package com.example.shoppingjpa.service.imp;

import com.example.shoppingjpa.model.Card;
import com.example.shoppingjpa.service.CardService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CardServiceImp implements CardService {
    @Override
    public List<Card> getAll() {
        return null;
    }

    @Override
    public Optional<Card> getById(int id) {
        return Optional.empty();
    }

    @Override
    public Card save(Card card) {
        return null;
    }

    @Override
    public void delete(int[] ids) {

    }
}
