package com.example.backend.service;

import com.example.backend.model.MyUser;
import com.example.backend.repository.UserRepository;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<MyUser> getAllUsers() {
        return userRepository.findAll();
    }

}