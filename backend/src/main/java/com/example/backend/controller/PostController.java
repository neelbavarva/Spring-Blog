package com.example.backend.controller;

import com.example.backend.dto.AddPostResponse;
import com.example.backend.dto.DeletePostResponse;
import com.example.backend.model.MyPost;
import com.example.backend.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/post")
public class PostController {

    @Autowired
    private PostService postService;

    @PostMapping("/addPost")
    public AddPostResponse addPost(@RequestBody MyPost myPost){

        // Extract username from jwt
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String username = userDetails.getUsername();

//        System.out.println(username);

        MyPost myNewPost = new MyPost();
        myNewPost.setTitle(myPost.getTitle());
        myNewPost.setContent(myPost.getContent());
        myNewPost.setCreatedBy(username);
        myNewPost.setCreatedOn(myPost.getCreatedOn());
        myNewPost.setUpdatedOn(myPost.getUpdatedOn());

//        System.out.println(myNewPost);

        postService.addPost(myNewPost);

        return new AddPostResponse(200, "Post added successfully");

    }

    @GetMapping("/view/all")
    public List<MyPost> viewAll(){
        return postService.viewAll();
    }

    @GetMapping("/view/user/{username}")
    public List<MyPost> viewUserPost(@PathVariable String username){
        return postService.viewUserPost(username);
    }

    @PutMapping("/update/{id}")
    public MyPost updatePost(@PathVariable("id") Long id, @RequestBody MyPost myPost){
        return postService.updatePost(id,myPost);
    }

    @DeleteMapping("/delete/{id}")
    public DeletePostResponse deltePost(@PathVariable("id") Long id){
        postService.deletePost(id);
        return new DeletePostResponse(200, "Post deleted successfully");
    }

}
