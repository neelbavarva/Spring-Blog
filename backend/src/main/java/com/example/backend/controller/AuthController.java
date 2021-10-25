package com.example.backend.controller;

import com.example.backend.helper.JwtUtil;
import com.example.backend.model.JwtRequest;
import com.example.backend.model.JwtResponse;
import com.example.backend.model.User;
import com.example.backend.service.CustomUserDetailsService;
import com.example.backend.service.UserService;
import io.jsonwebtoken.ExpiredJwtException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private CustomUserDetailsService customUserDetailsService;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/signup")
    public void signup(@RequestBody User user){
        userService.addNewUser(user);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody JwtRequest jwtRequest) throws Exception {

        System.out.println(jwtRequest);

        try{
            this.authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(jwtRequest.getUsername(), jwtRequest.getPassword()));
        } catch (UsernameNotFoundException e){
            e.printStackTrace();
            throw new Exception("Bad Credentials !");
        } catch (BadCredentialsException e){
            throw new Exception("Bad Credentials !");
        }

        System.out.println("YOO");
        UserDetails userDetails = this.customUserDetailsService.loadUserByUsername(jwtRequest.getUsername());
        System.out.println("YOO");
        String token = this.jwtUtil.generateToken(userDetails);
        System.out.println("Jwt Token: " + token);

        return ResponseEntity.ok(new JwtResponse(token));
    }
}
