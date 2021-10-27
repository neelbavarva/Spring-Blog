package com.example.backend.service;

import com.example.backend.model.MyPost;
import com.example.backend.model.MyUser;
import com.example.backend.repository.PostRepository;
import com.example.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
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

    public void deletePost(Long id) {
        postRepository.deleteById(id);
    }

    public MyPost updatePost(Long id, MyPost myPost) {
        MyPost postDB = postRepository.findById(id).get();

        if(Objects.nonNull(myPost.getTitle()) && !"".equals(myPost.getTitle())){
            postDB.setTitle(myPost.getTitle());
        }

        if(Objects.nonNull(myPost.getContent()) && !"".equals((myPost.getContent()))){
            postDB.setContent(myPost.getContent());
        }

        return postRepository.save(postDB);
    }
}
