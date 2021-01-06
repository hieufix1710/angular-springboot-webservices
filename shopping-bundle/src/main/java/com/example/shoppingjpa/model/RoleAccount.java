package com.example.shoppingjpa.model;

import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class RoleAccount {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private  Long id;

    @OneToOne
    private Role role;
    @OneToOne
    private Account account;
}
