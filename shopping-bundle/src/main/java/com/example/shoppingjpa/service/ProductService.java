package com.example.shoppingjpa.service;

import com.example.shoppingjpa.model.Product;

import java.util.List;

public interface ProductService extends BaseService<Product> {
    List<Product> getListProducts(int pageNum,int pageSize,int priceFlow,int type, String[] search);

    Integer getFullEntities( int type, String[] search);

    List<Product> getGoodsForFirstHome(int typeProductId, int filterType);

    List<Product> getGoodsForShopView(int pageNum, int pageSize, int priceFlow, String search, int typeProductId);

    Integer getTotalEntities(int priceFlow, String search, int typeProductId);

    int getByTypeId(int typeId);
}
