import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { PostService } from '.././services/post.service';
import { Post } from '../models/post';
import { EditService } from '../services/edit.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css'],
})
export class EditPostComponent implements OnInit {
  posts: Post[]=[];
  title: String;
 

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private editService: EditService,
    private router: Router) { }

  ngOnInit() {
    this.getPost();
  
  }
  
  getPost(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.postService.getPost(id)
    .subscribe(post =>{ this.posts.push (post); });
  }

  editPost(author: String,title: String, body: String): void {
    const id = +this.route.snapshot.paramMap.get('id');
    author = author.trim();
    title = title.trim();
    body = body.trim();
    if(!title || !body){return;}
    this.postService.editPost({title, body,author } as Post, id)
    .subscribe(() => this.router.navigate(['/home/wall']));

  }
  
  }
  