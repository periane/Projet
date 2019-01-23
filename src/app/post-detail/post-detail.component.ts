import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PostService }  from '../services/post.service';
import { CommentService } from '../services/comment.service';

import { Post } from '../models/post';
import { Comment } from '../models/comment';
import { from } from 'rxjs';
import { identifierModuleUrl } from '@angular/compiler';



@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post: Post;
  title: String;
  comments: Comment[];

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private commentService: CommentService,
    private location: Location) { }

  ngOnInit() {
    this.getPost();
    this.getPostComments();
  }
  
  getPost(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.postService.getPost(id)
    .subscribe(post => {this.post = post});
  }
  getPostComments(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.commentService.getPostComments(id)
    .subscribe(comments => {this.comments = comments});
  }
 Postdelete(post_id: number): void {
    this.postService.deletePost(post_id)
    .subscribe( () => {this.location.back()
    } );
   
  }
  addComment( comment: String): void{
    const id = +this.route.snapshot.paramMap.get('id');
    // this.postService.getPost(id);
    var body = comment.trim();
    var author = 'test';
    
    if(!body){ return; }
    this.commentService.addComment({ body, author } as Comment, id)
    .subscribe(comments => {this.comments = comments});
  }
 
}