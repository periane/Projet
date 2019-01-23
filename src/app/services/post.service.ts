import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Post} from '../models/post';
import { Comment } from '../models/comment';
import { componentNeedsResolution } from '@angular/core/src/metadata/resource_loading';
import { MessageService } from '../message/message.service';
 
@Injectable({
  providedIn: 'root'
})

export class PostService {

  private apiUrl = 'http://localhost/sociale/web/index.php';

  constructor(private http: HttpClient , private messageService: MessageService) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl + "/api/blog", {headers: {'Content-Type' : 'application/x-www-form-urlencoded'}})
  }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(this.apiUrl + "/api/post/"+id, {headers: {'Content-Type' : 'application/x-www-form-urlencoded'}})
  }

  addPost(post: Post): Observable<Post> { 
    let body = `title=${post.title}&body=${post.body}&author=${post.author}`;
    return this.http.post<Post>(this.apiUrl + "/api/post", body, {headers: {'Content-Type' : 'application/x-www-form-urlencoded'}});
  }

  addLike(id: Number): Observable<Post[]>{
    let bodyLike = `like=1`;
    return this.http.post<Post[]>(this.apiUrl+"/api/post/detail/"+id+'/addLike', bodyLike, 
    {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
  }
  
  addDislike(id: Number): Observable<Post[]>{
    let bodyLike = `like=1`;
    return this.http.post<Post[]>(this.apiUrl+"/api/post/detail/"+id+'/addDislike', bodyLike, 
    {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
  }

  deletePost(id: number): Observable<Post[]> { 
    return this.http.get<Post[]>(this.apiUrl + "/api/post/detail/"+ id + '/deletePost' ,
    {headers: {'Content-Type' : 'application/x-www-form-urlencoded'}})
  }

  editPost(post: Post, id: Number): Observable<Post[]>{
    let body = `title=${post.title}&body=${post.body}&author=${post.author}`;
    return this.http.post<Post[]>(this.apiUrl+"/api/post/"+id+ '/editPost',
     body, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});
  }
}