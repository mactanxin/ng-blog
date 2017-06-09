import { Component, Input } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'post-detail',
  templateUrl: './post-detail.component.html'
})

export class PostDetailComponent {
    @Input() post: Post;
}