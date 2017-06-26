import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Post } from './post';
import { POSTS } from './mock-posts';

@Injectable()
export class PostService {
    postsUrl: string = 'https://jsonplaceholder.typicode.com/posts';

    constructor(public http: Http){
      console.log('Constructor initialised');
    }

    getPosts(): Promise<Post[]>{
      // return this.http.get(this.postsUrl).map( res => res.json() );
      return Promise.resolve(POSTS);
    }

    getPost(id) {
      const post = `${this.postsUrl}/${id}`;
      // return this.http.get(post).map(res => res.json());
      if (id-1>0) {
        return Promise.resolve(POSTS[id-1]);
      }
    }

    getPostsSlowly(): Promise<Post[]> {
      return new Promise(resolve => {
        setTimeout(() => resolve(this.getPosts()), 2000);
      });
    }
}