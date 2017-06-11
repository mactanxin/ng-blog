import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
    selector: 'about-me',
    templateUrl: './about-me.component.html',
})

export class AboutMeComponent implements OnInit {
    constructor(private router: Router){}

    ngOnInit() {
        
    }
}