package com.example.shoppingjpa.model;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private LocalDate birthday;
    private String avatar;

    private String address;
    private String email;

    @OneToOne
    private Account account;
    private Byte deleted = 0;

}
