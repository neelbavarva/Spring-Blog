package com.example.backend.controller;

import com.example.backend.dto.LoginRequest;
import com.example.backend.dto.LoginResponse;
import com.example.backend.dto.RegisterResponse;
import com.example.backend.helper.JwtUtil;
import com.example.backend.model.MyUser;
import com.example.backend.service.AuthService;
import com.example.backend.service.CustomUserDetailsService;
import io.jsonwebtoken.ExpiredJwtException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private CustomUserDetailsService customUserDetailsService;

    @PostMapping("/signup")
    public RegisterResponse addUser(@RequestBody MyUser myUser){
        authService.addUser(myUser);
        return new RegisterResponse(200, "Registered Successfully");
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) throws Exception {
        System.out.println(loginRequest);

        try{
            this.authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));
        } catch (UsernameNotFoundException e){
            e.printStackTrace();
            throw  new Exception("Bad Credentials !");
        } catch (BadCredentialsException e){
            throw  new Exception("Bad Credentials !");
        } catch (ExpiredJwtException e) {
            System.out.println("Token expired");
        }

        UserDetails userDetails = this.customUserDetailsService.loadUserByUsername(loginRequest.getUsername());

        String token = this.jwtUtil.generateToken(userDetails);
        System.out.println("JWT " + token);

        return ResponseEntity.ok(new LoginResponse(token, 200));
    }

}
