package com.example.board.vel01.service;

import com.example.board.vel01.base.jwt.JwtTokenProvider;
import com.example.board.vel01.domain.User;
import com.example.board.vel01.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class UserServiceImpI implements UserService{


    private final UserRepository userRepository;


    private final JwtTokenProvider jwtTokenProvider;

    @Override
    public User saveUser(User newUser) {
        return userRepository.save(newUser);
    }

    @Override
    public User loginUser(User.Request request) {
        return userRepository.findByNickName(request.getNickName());
    }

    @Override
    public List<User> findUser() {

        return userRepository.findAll();
    }
}
