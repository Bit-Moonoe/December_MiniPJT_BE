package com.example.board.vel01.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.board.vel01.domain.Post;
import com.example.board.vel01.repository.PostRepository;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class PostService{
	
	private final PostRepository postRepository;
	
	@Autowired
	public PostService(PostRepository postRepository) {
		this.postRepository = postRepository;
	}


	public List<Post> createPost(final Post postEntity){
		validation(postEntity);
		postRepository.save(postEntity);
		log.info("post");
		return postRepository.findByNickName(postEntity.getNickName());
	};
	
	private void validation(final Post postEntity) {
		if(postEntity == null) {
			log.warn("postEntity cannat be null");
		throw new RuntimeException("PostEntity는 null 허용 불가");	
		}
		
		if(postEntity.getNickName() == null) {
			log.warn("해당 닉네임이 없습니다.");
		throw new RuntimeException("해당 닉네임이 없습니다.");
		}
	};
	
	public List<Post> retrieve(final String nickName){
		log.warn(nickName);
		return postRepository.findByNickName(nickName);
	}
		
	public List<Post> update(final Post postEntity){
		validation(postEntity);
		
		final Optional<Post> userCheck = postRepository.findById(postEntity.getId());
		
		userCheck.ifPresent(post->{
			post.setNickName(postEntity.getNickName());
			post.setContent(postEntity.getContent());
			post.setTitle(postEntity.getTitle());
			postRepository.save(post);
		});
		
		return retrieve(postEntity.getNickName());
	}
	
	
	public List<Post> delete(final Post postEntity){
		validation(postEntity);
		
		try {
			postRepository.delete(postEntity);
		}catch(Exception e) {
			log.error("Post 삭제 중 에러 발생.", postEntity.getId(), e);
			throw new RuntimeException("삭제 중 에러 발생" + postEntity.getId());
		}
		
		return retrieve(postEntity.getNickName());
	}
	
	
	
}
