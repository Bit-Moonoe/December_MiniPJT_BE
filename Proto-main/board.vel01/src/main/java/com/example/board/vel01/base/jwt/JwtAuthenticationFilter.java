//package com.example.board.vel01.base.jwt;
//
//import com.example.board.vel01.domain.User;
//import com.example.board.vel01.model.UserDto;
//import io.jsonwebtoken.ExpiredJwtException;
//import java.io.IOException;
//import java.util.Arrays;
//import java.util.Collections;
//import java.util.List;
//import javax.servlet.FilterChain;
//import javax.servlet.ServletException;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//import lombok.Builder;
//import lombok.Getter;
//
//import lombok.extern.slf4j.Slf4j;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.http.HttpHeaders;
//import org.springframework.util.StringUtils;
//import org.springframework.web.filter.OncePerRequestFilter;
//
//
//@Getter
//public class JwtAuthenticationFilter extends OncePerRequestFilter {
//
//    private final JwtTokenProvider jwtTokenProvider;
//
//    @Builder
//    private JwtAuthenticationFilter(JwtTokenProvider jwtTokenProvider) {
//
//        this.jwtTokenProvider = jwtTokenProvider;
//    }
//
//
//
//    public static JwtAuthenticationFilter of(JwtTokenProvider jwtTokenProvider) {
//        return JwtAuthenticationFilter.builder()
//                .jwtTokenProvider(jwtTokenProvider)
//                .build();
//    }
//
//    @Override
//    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response,
//                                    FilterChain filterChain) throws IOException, ServletException {
//        String authorizationHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
//
//        try {
//            UserDto user = jwtTokenProvider.getUserDtoOf(authorizationHeader);
//            SecurityContextHolder.getContext().setAuthentication(new UsernamePasswordAuthenticationToken(
//                    user,
//                    "",
//                    user.getAuthorities()));
//
//            filterChain.doFilter(request, response);
//        } catch (ExpiredJwtException exception) {
//            logger.error("ExpiredJwtException", exception);
//        }
//    }
//}