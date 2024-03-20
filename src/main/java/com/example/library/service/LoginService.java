package com.example.library.service;

import com.example.library.LoginForm;
import com.example.library.infrastructure.entity.UserEntity;
import com.example.library.infrastructure.repository.UserRepository;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class LoginService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Value("${jwt.token.key}$")
    private String key;

    @Autowired
    public LoginService(PasswordEncoder passwordEncoder, UserRepository userRepository){
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public String login(LoginForm loginForm){
        UserEntity user = userRepository.findByUsername(LoginForm.getLogin());
        if(passwordEncoder.matches(loginForm.getPassword(), user.getPassword())){
            long timeMillis = System.currentTimeMillis();
            String token = Jwts.builder()
                    .issuedAt(new Date(timeMillis))
                    .expiration(new Date(timeMillis+5*60*1000))
                    .claim("id", "userId")
                    .claim("userRole", "ROLE_") //rola z bazy danych
                    .signWith(SignatureAlgorithm.HS256, key)
                    .compact();
            return token;
        }
        else {
            return null;
        }

    }
}
