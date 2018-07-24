import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';

import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'post-detail',
  templateUrl: './post-detail.component.html'
})

export class PostDetailComponent implements OnInit{
    post: Post|Post[];
    constructor(
        private postService: PostService,
        private route: ActivatedRoute,
        private location: Location
    ){}

    ngOnInit(): void {
      this.route.params
      .switchMap((params: Params) => this.postService.getPost(+params['id']))
      .subscribe((post)=>{
        this.post = post[0];
      })
    }

    goBack(): void {
      this.location.back();
    }
}