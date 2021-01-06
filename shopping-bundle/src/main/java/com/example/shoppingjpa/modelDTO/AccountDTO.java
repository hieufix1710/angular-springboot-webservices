package com.example.shoppingjpa.modelDTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class AccountDTO  {
    private Long id;
    private String username;
    private String password;


}
