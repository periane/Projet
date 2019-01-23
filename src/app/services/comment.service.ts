import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Comment } from '../models/comment';
import { Post } from '../models/post';
import { compileComponentFromRender2 } from '@angular/compiler/src/render3/view/compiler';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  
  private apiUrl = 'http://localhost/sociale/web/index.php';


  constructor(private http: HttpClient) { }
  getPostComments(id: Number): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.apiUrl+"/api/post/detail/"+ id+"/comments", 
    {headers: {'Content-Type' : 'application/x-www-form-urlencoded'}})
  
  }
  
  addLike(id: Number): Observable<Post>{
    let bodyLike = `like=1`;
    return this.http.post<Post>(this.apiUrl+'/api/post/detail/'+id+'/addLike', bodyLike, 
    {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
  }
  getPostTotalNumberComments(id: Number): Observable<Post>{
    return this.http.get<Post>(this.apiUrl+"/api/post/detail/"+id+"/numberComments", 
    {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});
   }
  
  addComment(comment: Comment ,id : Number): Observable<Comment[]> { 
    let body = `id=${comment.id}&body=${comment.body}&author=${comment.author}`;
   
    return this.http.post<Comment[]>(this.apiUrl + "/api/post/detail/" + id+ "/addComment", body,
    {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});
  }
}
