import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../models/post';


@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {  

  posts: Post[]=[];
 
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPosts();
  }

 
  getPosts(): void {
    this.postService.getPosts()
        .subscribe(posts => this.posts = posts);
  }

  add(title: String , body:String, author: String ): void {
    title=title.trim();
    author=author.trim();
    body=body.trim();

    if(!title){ return; }
    this.postService.addPost({ title, body, author } as Post)
    .subscribe(post =>{ this.posts.push (post); });
  }
}