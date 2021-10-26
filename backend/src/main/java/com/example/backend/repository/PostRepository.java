package com.example.backend.repository;

import com.example.backend.model.MyPost;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostRepository extends JpaRepository<MyPost, Long> {
}
