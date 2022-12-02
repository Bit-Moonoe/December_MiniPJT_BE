package com.example.board.vel01.service;

import com.example.board.vel01.domain.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserService {
    User saveUser(User request);

    User loginUser(User.Request request);

    List<User> findAllUser();
    
}
