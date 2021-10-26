package com.example.backend.service;

import com.example.backend.dto.LoginRequest;
import com.example.backend.model.MyUser;
import com.example.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    public void addUser(MyUser myUser) {
        userRepository.save(myUser);
    }

    public void login(LoginRequest loginRequest) {

    }


}
