package com.example.board.vel01.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.board.vel01.domain.Post;

@Repository
public interface PostRepository extends JpaRepository<Post, String> {
	List<Post> findByNickName(String nickName);
}
