package com.example.board.vel01.model;

import com.example.board.vel01.domain.User;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AddUserDto {
        private String nickName;
        private String pwd;

        public User toEntity(String nickName) {
            return User.builder()
                    .nickName(nickName)
                    .pwd(pwd)
                    .build();
        }
    }
