package com.example.shoppingjpa.model;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
@ToString
public class Product implements Comparable<Product> {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String url;
    private int price;
    private int quantity;
    private int saleOff;
    private int tradeMark;

    @Column(name = "date_upload", columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime dateUpload = LocalDateTime.now();
    private int view = 0;
    private int commentAmount = 0;
    private byte followed = 0;
    private int downloadAmount = 0;
    @ManyToOne
    private TypeProduct typeProduct;
    private Byte deleted = 0;
    private String description;

    @ManyToOne
    private User user;

    @Override
    public int compareTo(Product o) {
        if (this.price < o.price){
            return -1;
        }
        if (this.price == o.price){
            return  0;
        }
        return 1;
    }
}
