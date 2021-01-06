package com.example.shoppingjpa.controller;

import com.example.shoppingjpa.model.Product;
import com.example.shoppingjpa.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ProductController {
    @Autowired
    private ProductService productService;

    @GetMapping("/products")
    public List<Product> getAll(){
        return this.productService.getAll();
    }

   @PostMapping("products/{pageNum}")
    public List<Product> getProducts(@PathVariable int pageNum,
                                     @RequestParam int pageSize,
                                     @RequestParam int priceFlow,
                                     @RequestParam int typeProduct,
                                     @RequestBody String[] filterCheck
                                     ){
       return productService.getListProducts(pageNum,pageSize,priceFlow,typeProduct,filterCheck);

   }

   @PostMapping("/productIndex")
    public Integer getFullIndex(@RequestParam int typeProduct, @RequestBody String[] filterCheck){
        return productService.getFullEntities(typeProduct, filterCheck);
   }


   @GetMapping("product/{productId}")
   public Product getProductById(@PathVariable int productId){
        return productService.getById(productId).orElse(null);
   }

   @GetMapping("/getByTypeId")
    public int getByType(@RequestParam int type){
        return productService.getByTypeId(type);
   }


   @PostMapping("addNew")
    public Product addNewProduct(@RequestBody Product product) {
       if (product.getUser().equals(null)){
           return null;
       }
       System.out.println(product.toString());
        return productService.save(product);
   }



}
