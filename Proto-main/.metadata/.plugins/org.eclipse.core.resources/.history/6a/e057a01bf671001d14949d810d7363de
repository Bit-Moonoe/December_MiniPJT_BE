package com.example.board.vel01.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@Entity
@Table(name = "post")
public class PostDto {
    @Id
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name = "system-uuid", strategy = "uuid")
    @Column(name = "post_id")
    private Long id;
    private String nickName;
    private String Title;
    private String content;
    private String comment;
    private Long viewCount;
}