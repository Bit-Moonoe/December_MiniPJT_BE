//package com.example.board.vel01.base.config;
//
//import org.jetbrains.annotations.NotNull;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.web.servlet.config.annotation.CorsRegistry;
//import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
//
//@Configuration
//
//public class WebMvcConfig implements WebMvcConfigurer {
//    private final long MAX_AGE_SECS = 3600;
//    
//    @Override
//    public void addCorsMappings(@NotNull CorsRegistry registry){
//        registry.addMapping("/**")
//                .allowedOrigins("http://localhost:3000")
//                .allowedHeaders("*")
//                .allowedMethods("*")
//                .allowCredentials(true)
//                .maxAge(MAX_AGE_SECS);
//    }
//}
