import { Component, OnInit } from '@angular/core';
import { Post } from './post';

import { AppRoutingModule } from './app-routing.module';
import {MdButtonModule, MdCheckboxModule, MdListModule, MdCardModule, MdInputModule} from '@angular/material';

import { PostsService } from './posts.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[PostsService]
})

export class AppComponent implements OnInit{
  posts = [];

  selectedPost: Post;

  constructor(protected postService: PostsService){};

  onSelect(post: Post): void {
    this.selectedPost = post;
  }


  getPosts() {
    this.postService.getPosts().then(posts => this.posts = posts);;
  }
  ngOnInit() :void {
    this.getPosts()
  }
}
