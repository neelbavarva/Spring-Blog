package com.example.backend.controller;

import com.example.backend.model.MyUser;
import com.example.backend.service.UserService;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/getAll")
    public List<MyUser> getAllUsers(){
        return userService.getAllUsers();
    }
}
