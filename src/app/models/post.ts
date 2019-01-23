import {Comment} from  "../models/comment"

export class Post {
  id:     number;
  title:  string;
  author: string;
  body:   string;
  likes: number;
  dislikes: number;
  nb_likes: number;
  comments: Comment[];
}