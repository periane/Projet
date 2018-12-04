import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Post} from '../models/post';
import { componentNeedsResolution } from '@angular/core/src/metadata/resource_loading';
// import { POSTS } from '../mocks/mock-posts';
 
@Injectable({
  providedIn: 'root'
})

export class PostService {

  private apiUrl = 'http://localhost/sociale/web/index.php';

  constructor(private http: HttpClient) { }

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
}