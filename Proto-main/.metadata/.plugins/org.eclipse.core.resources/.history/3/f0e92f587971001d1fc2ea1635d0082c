package com.example.board.vel01.service;
import com.example.board.vel01.base.jwt.JwtTokenProvider;
import com.example.board.vel01.domain.User;
import com.example.board.vel01.model.AddUserDto;
import com.example.board.vel01.model.LoginUserDto;
import com.example.board.vel01.model.response.AddUserResponse;
import com.example.board.vel01.model.response.LoginUserResponse;
import com.example.board.vel01.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class UserAccountService {

    private final UserRepository userRepository;
    private final JwtTokenProvider jwtTokenProvider;

    public AddUserResponse signUp(AddUserDto user) {
        User savedUser = userRepository.save(user.toEntity(user.getNickName()));

        return new AddUserResponse(savedUser);
    }

    public User signIn(LoginUserDto userDto) {
        User user = userRepository.findByNickName(userDto.getNickName())
                .orElseThrow(IllegalArgumentException::new);

          String token = jwtTokenProvider.makeJwtToken(user);
//        return new LoginUserResponse(token);

        return user;
    }
}