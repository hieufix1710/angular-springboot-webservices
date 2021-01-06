package com.example.shoppingjpa.service.imp;

import com.example.shoppingjpa.model.Product;
import com.example.shoppingjpa.repository.ProductRepository;
import com.example.shoppingjpa.service.ProductService;
import com.example.shoppingjpa.service.TypeProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class ProductServiceImp implements ProductService {

    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private TypeProductService typeProductService;

    static int typeProductMax = 0;

    @Override
    public List<Product> getAll() {
        List<Product> productList = new ArrayList<>();
        try {
            productList = productRepository.findAll();
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        return productList;
    }

    @Override
    public Optional<Product> getById(int id) {
        try {
            return productRepository.findById((long) id);
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        return Optional.empty();
    }

    @Override
    public Product save(Product product) {
        try {
            return productRepository.save(product);
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        return null;
    }

    @Override
    public void delete(int[] ids) {

    }

    @Override
    public List<Product> getListProducts(int pageNum, int pageSize, int priceFlow, int type, String[] search) {
        List<Product> list = new ArrayList<>();
        List<Product> list2 = new ArrayList<>();
        try {
            if (priceFlow == 0) {
                list = productRepository.findAll().stream()
                        .filter(e -> e.getDeleted() == 0 && e.getTypeProduct().getId() == type)
                        .collect(Collectors.toList());
                Collections.reverse(list);

                list2 = list.stream()
                        .skip((pageNum - 1) * pageSize)
                        .limit(pageSize).sorted().collect(Collectors.toList());
                return list2;
            } else if (priceFlow == 1) {
                list = productRepository.findAll().stream()
                        .filter(e -> e.getDeleted() == 0 && e.getTypeProduct().getId() == type)
                        .sorted()
                        .skip((pageNum - 1) * pageSize).limit(pageSize)
                        .collect(Collectors.toList());
            }


        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        return list;
    }


    @Override
    public Integer getFullEntities(int type, String[] search) {
        int index = 0;
        try {
            index = productRepository.findAll().stream()
                    .filter(e -> e.getDeleted() == 0 && e.getTypeProduct().getId() == type)
                    .collect(Collectors.toList()).size();
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        return index;
    }


    @Override
    public List<Product> getGoodsForFirstHome(int typeProductId, int filterType) {
        List<Product> list = new ArrayList<>();
        try {
            if (typeProductId <= 0 || typeProductId > 3) {
                if (filterType == 2) {
                    list = productRepository.findAll().stream()
                            .filter(e -> e.getDeleted() == 0
                                    && (e.getDateUpload().compareTo(LocalDateTime.now()) < 0)
                            )
                            .limit(8)
                            .collect(Collectors.toList());
                }
                if (filterType == 1) {

                    list = productRepository.findAll().stream()
                            .filter(e -> e.getDeleted() == 0
                                    && e.getDownloadAmount() > 100
                            )
                            .limit(8)
                            .collect(Collectors.toList());


                }
                if (filterType == 3) {
                    list = productRepository.findAll().stream()
                            .filter(e -> e.getDeleted() == 0
                                    && e.getFollowed() > 100
                            )
                            .limit(8)
                            .collect(Collectors.toList());

                }
            } else {
                if (filterType == 2) {
                    list = productRepository.findAll().stream()
                            .filter(e -> e.getDeleted() == 0 && e.getTypeProduct().getId() == typeProductId
                                    && (e.getDateUpload().compareTo(LocalDateTime.now()) < 0)
                            )
                            .limit(8)
                            .collect(Collectors.toList());
                }
                if (filterType == 1) {

                    list = productRepository.findAll().stream()
                            .filter(e -> e.getDeleted() == 0 && e.getTypeProduct().getId() == typeProductId
                                    && e.getDownloadAmount() > 100
                            )
                            .limit(8)
                            .collect(Collectors.toList());


                }
                if (filterType == 3) {
                    list = productRepository.findAll().stream()
                            .filter(e -> e.getDeleted() == 0 && e.getTypeProduct().getId() == typeProductId
                                    && e.getFollowed() > 100
                            )
                            .limit(8)
                            .collect(Collectors.toList());

                }
            }


        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        return list;
    }


    @Override
    public List<Product> getGoodsForShopView(int pageNum, int pageSize,
                                             int priceFlow, String search,
                                             int typeProductId) {
        typeProductMax = typeProductService.getAll().size();
        List<Product> list = new ArrayList<>();
        List<Product> list2 = new ArrayList<>();
        try {
            if (typeProductId == 0) {
                if (priceFlow == 0) {
                    list = productRepository.findAll().stream()
                            .filter(e -> (e.getDeleted() == 0)
                                    &&
                                    e.getName().toLowerCase().contains(search.toLowerCase()))
                            .collect(Collectors.toList());
                    Collections.reverse(list);

                    list2 = list.stream()
                            .skip((pageNum - 1) * pageSize)
                            .limit(pageSize).collect(Collectors.toList());
                    return list2;
                }
                if (priceFlow == 1) {
                    list = productRepository.findAll().stream()
                            .filter(e -> (e.getDeleted() == 0)

                                    &&
                                    e.getName().toLowerCase().contains(search.toLowerCase())


                            )
                            .sorted()
                            .skip((pageNum - 1) * pageSize).limit(pageSize)
                            .collect(Collectors.toList());
                    return list;
                }
            }else if (typeProductId <= typeProductMax ){
                if (priceFlow == 0) {
                    list = productRepository.findAll().stream()
                            .filter(e -> (e.getDeleted() == 0 && e.getTypeProduct().getId() == typeProductId)
                                    &&
                                    e.getName().toLowerCase().contains(search.toLowerCase())
                            )
                            .collect(Collectors.toList());
                    Collections.reverse(list);

                    list2 = list.stream()
                            .skip((pageNum - 1) * pageSize)
                            .limit(pageSize).collect(Collectors.toList());
                    return list2;
                }
                if (priceFlow == 1) {
                    list = productRepository.findAll().stream()
                            .filter(e -> (e.getDeleted() == 0 && e.getTypeProduct().getId() == typeProductId)

                                    &&
                                    e.getName().toLowerCase().contains(search.toLowerCase())


                            )
                            .sorted()
                            .skip((pageNum - 1) * pageSize).limit(pageSize)
                            .collect(Collectors.toList());


                }
            }

        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        return list;
    }


    @Override
    public Integer getTotalEntities(int priceFlow, String search, int typeProductId) {
        List<Product> list = new ArrayList<>();
        try {
            if (typeProductId == 0) {
                return productRepository.findAll().size();
            }
            if (priceFlow == 0) {

                list = productRepository.findAll().stream()
                        .filter(e -> (e.getDeleted() == 0 && e.getTypeProduct().getId() == typeProductId)

                                &&
                                e.getName().toLowerCase().contains(search.toLowerCase())


                        )
                        .collect(Collectors.toList());
                Collections.reverse(list);
            }
            if (priceFlow == 1) {

                list = productRepository.findAll().stream()
                        .filter(e -> (e.getDeleted() == 0 && e.getTypeProduct().getId() == typeProductId)

                                &&
                                e.getName().toLowerCase().contains(search.toLowerCase())


                        )
                        .sorted()
                        .collect(Collectors.toList());


            }
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        return list.size();
    }


    @Override
    public int getByTypeId(int typeId) {
        List<Product> products = new ArrayList<>();
        try {
            products = productRepository.findAll().stream().filter(g -> g.getTypeProduct().getId() == typeId).collect(Collectors.toList());

        } catch (Exception e) {
            System.out.println(e.getMessage());

        }
        return products.size();
    }
}
