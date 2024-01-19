import { Component, OnInit} from '@angular/core';
import { JSONPlaceholderService } from 'src/services/jsonplaceholder.service'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[] = [];

  constructor(private JSONPlaceholder: JSONPlaceholderService) { }
  ngOnInit(): void {
    this.JSONPlaceholder.getPosts().subscribe((data) => {
      this.posts = data;
    })
  }

  post!: Post;

  postCreate(item: any) {
    this.post = {
      id: this.posts.length+1,
      userId: item.userId,
      title: item.title,
      body: item.body,
    };
    this.posts.push(this.post);
  }

}
export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}
