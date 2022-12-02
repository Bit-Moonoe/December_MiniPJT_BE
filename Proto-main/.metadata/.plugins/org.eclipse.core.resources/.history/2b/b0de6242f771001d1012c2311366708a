package com.example.board.vel01.model.response;

import com.example.board.vel01.domain.User;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class AddUserResponse {

    private String nickName;
    private String pwd;

    public AddUserResponse(User user) {
        this.nickName = user.getNickName();
        this.pwd = user.getPwd();
    }
}
