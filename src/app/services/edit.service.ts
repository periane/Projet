import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class EditService {

  private apiUrl = 'http://localhost/sociale/web/index.php';

  constructor(private http: HttpClient) {}
  getPostEdit(id: Number): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl+"/api/post/detail/"+ id+'/editPost', 
    {headers: {'Content-Type' : 'application/x-www-form-urlencoded'}})
  }

   editPost(post: Post, id: Number): Observable<Post[]>{
    let body = `title=${post.title}&body=${post.body}&title=${post.title}`;
    
    return this.http.post<Post[]>(this.apiUrl+"/api/post/"+id+'/editPost', 
    body, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});
   }
}
