package com.example.board.vel01.base.jwt;


import java.time.Duration;
import java.util.Date;

import com.example.board.vel01.domain.User;
import com.example.board.vel01.model.UserDto;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Component;

@RequiredArgsConstructor
@Component
public class JwtTokenProvider {

    private final JwtProperties jwtProperties;

    private final static String SECRECTKEY = "KTRKEKTEJTKJETJKERJTKFKJSFNNFFKFERKR";

    public String makeJwtToken(User.Request user) {
        Date now = new Date();

        return Jwts.builder()
                .setIssuer(jwtProperties.getIssuer())
                .setIssuedAt(now)
                .setExpiration(new Date(now.getTime() + Duration.ofMinutes(30).toMillis()))
                .claim("id", user.getId())
                .signWith(SignatureAlgorithm.HS256, SECRECTKEY)
                .compact();
    }



    public UserDto getUserDtoOf(String authorizationHeader) {
        validationAuthorizationHeader(authorizationHeader);

        String token = extractToken(authorizationHeader);
        Claims claims = parsingToken(token);

        return new UserDto(claims);
    }

    private Claims parsingToken(String token) {
        return Jwts.parser()
                .setSigningKey(jwtProperties.getSecretKey())
                .parseClaimsJws(token)
                .getBody();
    }



    private void validationAuthorizationHeader(String header) {
        if (header == null || !header.startsWith(jwtProperties.getTokenPrefix())) {
            throw new IllegalArgumentException();
        }
    }

    private String extractToken(String authorizationHeader) {
        return authorizationHeader.substring(jwtProperties.getTokenPrefix().length());
    }

}