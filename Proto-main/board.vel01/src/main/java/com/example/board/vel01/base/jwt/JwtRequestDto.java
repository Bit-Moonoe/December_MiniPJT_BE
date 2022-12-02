package com.example.board.vel01.base.jwt;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
public class JwtRequestDto {
    String accessToken;
    String refreshToken;

    @Builder
    public JwtRequestDto(String accessToken, String refreshToken) {
        this.accessToken = accessToken;
        this.refreshToken = refreshToken;
    }
}
