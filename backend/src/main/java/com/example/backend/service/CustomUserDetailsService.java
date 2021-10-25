package com.example.backend.service;

import com.example.backend.model.CustomUserDetails;
import com.example.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserService userService;

    @Override
    public CustomUserDetails loadUserByUsername(String username) throws UsernameNotFoundException {


        List<com.example.backend.model.User> user = userService.getAllUsers();

        com.example.backend.model.User userMain = null;

        for(int i=0;i<user.size();i++){
            System.out.println(user.get(i));
            if(user.get(i).getUsername().equals(username) || user.get(i).getUsername() == username){
                userMain = user.get(i);
            }
        }

        System.out.println(userMain);
        System.out.println(username);
        return new CustomUserDetails(userMain);


    }

}
