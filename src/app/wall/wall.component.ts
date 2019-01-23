import { Component, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { PostService } from '../services/post.service';
import { MessageService } from '../message/message.service';
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

  add(title: String , body:String, author: String, likes: number ): void {
    title=title.trim();
    author=author.trim();
    body=body.trim();

    if(!title){ return; }
    this.postService.addPost({ title, body, author,likes} as Post)
    .subscribe(post =>{ this.posts.push (post); });
  }

  addLike(id: Number):void{
    this.postService.addLike(id)
   .subscribe(posts => this.posts = posts);
  
  }
  addDislike(id: Number):void{
    this.postService.addDislike(id)
   .subscribe(posts => this.posts = posts);
  
  }

  deletePost(id: number): void {
    this.postService.deletePost(id)
    .subscribe(posts => this.posts = posts);
  }


}