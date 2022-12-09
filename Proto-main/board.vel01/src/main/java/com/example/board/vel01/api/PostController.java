package com.example.board.vel01.api;

import java.util.List;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.board.vel01.domain.Post;
import com.example.board.vel01.repository.PostRepository;
import com.example.board.vel01.service.PostService;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("post")
public class PostController {
	
	private final PostRepository postRepository;
	
	private final PostService postService;
	
	@Autowired
	public PostController(PostRepository postRepository, PostService postService) {
		this.postRepository = postRepository;
		this.postService = postService;
	}
	
	// 게시글 작성 = C
	@PostMapping
	public ResponseEntity<?> createPost(@RequestBody Post.Request req ){
		
		if(req.getTitle().equals("")) {
			return ResponseEntity.badRequest().body("글 제목을 작성해주세요");
		}
		
		try {
			Post postEntity = Post.Request.toEntity(req);
			
			postEntity.setNickName(req.getNickName());
			
			List<Post> postEntities = postService.createPost(postEntity);
			System.out.println(postEntities); //엔티티 체크용
			
			List<Post.Response> res = Post.Response.toResponseList(postEntities);
			return ResponseEntity.ok().body(res);
		} catch(Exception e) {
			String err = "에러";
			Post.Response res = Post.Response.builder().err(err).build();
			return ResponseEntity.badRequest().body(res);
		}
	}
	
	// 전체 게시글 목록
	@GetMapping("/postList/main")
	public ResponseEntity<?> allPosts(){
		return ResponseEntity.ok().body(postRepository.findAll());
	}
	
	// 작성자명으로 게시글 조회 = R
	@GetMapping("/postList/{nickName}")
	public ResponseEntity<?> retrievePostList(@PathVariable String nickName){
		List<Post> postEntities = postService.retrieve(nickName); 
		List<Post.Response> res = Post.Response.toResponseList(postEntities);
		return ResponseEntity.ok().body(res);
	}
	
	// 게시글 수정 = U // 12월 9일날까지 작업해볼것
	@PutMapping("/update/{postId}")
	public ResponseEntity<?> updatePost(@Valid @RequestBody Post.Request req, @PathVariable Long postId){
		Post postEntity = Post.Request.toEntity(req);
//		postEntity.setNickName("moo"); //테스트용
		List<Post> postEntities = postService.update(postEntity);
		List<Post.Response> res=Post.Response.toResponseList(postEntities);
		
		return ResponseEntity.ok().body(res);
	}
	
	
	// 게시글 삭제 = D
	@Transactional
	@DeleteMapping("/delete/{postId}")
	public ResponseEntity<?> deletePost(@RequestBody Post.Request req, @PathVariable Long postId){
		try {
			Post postEntity = Post.Request.toEntity(req);
//			postEntity.setNickName(req.getNickName()); //테스트용
			List<Post> postEntities = postService.delete(postEntity, postId);
			
			List<Post.Response> res = Post.Response.toResponseList(postEntities);
			
			return ResponseEntity.ok().body(res);
		}catch(Exception e) {
			String err = e.getMessage();
			Post.Response res = Post.Response.builder().err(err).build();
			return ResponseEntity.badRequest().body(res);
		}
	}
	
	
	
	
	
}
