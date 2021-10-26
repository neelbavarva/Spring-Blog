package com.example.backend.controller;

import com.example.backend.dto.UserRequest;
import com.example.backend.helper.JwtUtil;
import com.example.backend.model.MyUser;
import com.example.backend.service.UserService;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private JwtUtil jwtUtil;

    @GetMapping("/getAll")
    public List<String> getAllUsers(){
        return userService.getAllUsers();
    }

    @PostMapping("/getUser")
    public String getUserInfo(@RequestBody UserRequest jwtToken){
        return this.jwtUtil.extractUsername(jwtToken.getJwtToken());
    }

}
