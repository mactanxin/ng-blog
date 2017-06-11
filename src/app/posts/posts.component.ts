import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'my-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [PostService]
})

export class PostsComponent implements OnInit {

  posts: any[];

  constructor(
      private router: Router, 
      private postService: PostService
  ) { }


  onSelect(post: Post): void {
    this.router.navigate(['/post', post.id]);
  }


  ngOnInit() {
    this.postService.getPosts().then( (data) => this.posts = data);
  }

  gotoDetail(post: Post): void {
    this.router.navigate(['/post', post.id]);
  }

}