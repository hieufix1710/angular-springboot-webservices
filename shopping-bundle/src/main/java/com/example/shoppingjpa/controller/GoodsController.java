package com.example.shoppingjpa.controller;

import com.example.shoppingjpa.model.Product;
import com.example.shoppingjpa.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@RestController
public class GoodsController {

    @Autowired
    private ProductService productService;

    @GetMapping("goods")
    public List<Product> getList(@RequestParam(defaultValue = "0") String typeProductId,
                                 @RequestParam int filterType

    ){
        int temp = Integer.parseInt(typeProductId);
        return productService.getGoodsForFirstHome(temp,filterType);
    }
    @GetMapping("goods/{pageNum}")
    public List<Product> listShopView(@PathVariable int pageNum,
                                      @RequestParam int pageSize,
                                      @RequestParam int priceFlow,
                                      @RequestParam(defaultValue = "") String search,
                                      @RequestParam int typeProductId

    ){
        List<Product> list = null;
        try {
            list =   productService.getGoodsForShopView(pageNum,pageSize,priceFlow,search,typeProductId);

        }catch (Exception e){
            System.out.println(e.getMessage());
        }
        return list;
    }

    @GetMapping("totalEntities")
    public Integer getTotalEntity(  @RequestParam int priceFlow,
                                          @RequestParam(defaultValue = "") String search,
                                          @RequestParam int typeProductId){
        return productService.getTotalEntities(priceFlow,search,typeProductId);
    }

    @GetMapping("getByType")
    public int getByType(@RequestParam int typeId){
        return productService.getByTypeId(typeId);
    }

}
