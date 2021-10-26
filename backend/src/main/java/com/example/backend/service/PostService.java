package com.example.backend.service;

import com.example.backend.model.MyPost;
import com.example.backend.model.MyUser;
import com.example.backend.repository.PostRepository;
import com.example.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class PostService {

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private UserRepository userRepository;

    public void addPost(MyPost myPost) {
        postRepository.save(myPost);
    }

    public List<MyPost> viewAll() {
        return postRepository.findAll();
    }

    public List<MyPost> viewUserPost(String username) {

        List<MyPost> allPosts = postRepository.findAll();
        List<MyPost> userPosts = new ArrayList<>();

        for(int i=0;i<allPosts.size();i++){
            if(allPosts.get(i).getCreatedBy().equals(username) || allPosts.get(i).getCreatedBy() == username){
                userPosts.add(allPosts.get(i));
            }
        }

        return userPosts;

    }
}
